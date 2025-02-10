import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import ExerciseStack from '../exerciseStack/ExercisesStack';
import ExerciseSelectionTable from '../exerciseSelectionTable/ExerciseSelectionTable';
import ExerciseLimitAlert from '../exerciseLimitAlert/ExerciseLimitAlert';
import { useSelector, useDispatch } from 'react-redux';
import { exerciseSelected } from '../../slices/fitnessSoulsSlice';
import arrayShuffle from 'array-shuffle'

const LIMIT_OF_EXERCISES = 5;

const ExerciseTableAndCards = props => {

    const deathButtonClicked = useSelector(state => state.fitnessSouls.deathButtonClicked);
    const dispatch = useDispatch();

    const [exercisesToDo, setExercisesToDo] = useState([]);
    const [showMaxExercisesAlert, setShowMaxExercisesAlert] = useState(false);
    const [limitOfExercisesReached, setLimitOfExercisesReached] = useState(false);
    const [randomizedExerciseIndex, setRandomizedExerciseIndex] = useState(0);
    const [exercises, setExercises] = useState(mapExercisesToArray);


    function mapExercisesToArray ()  {
        let userExercises = props.exercises;
        let exercisesArray = Object.keys(userExercises).map(key => ({ 'option': key, 'optionSize': +userExercises[key].weight }));
        return arrayShuffle(exercisesArray);
    }

    const chooseRandomExercise = () => {
        if (limitOfExercisesReached) {
            setShowMaxExercisesAlert(true);
            dispatch(exerciseSelected());
            return;
        }

        const indexOfRandomizedExercise = getRandomElement(exercises);
        setRandomizedExerciseIndex(indexOfRandomizedExercise);
    }

    function getRandomElement(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            throw new Error("Input must be a non-empty array.");
        }
        return Math.floor(Math.random() * arr.length);
    }


    const onExerciseItemClick = (exerciseName) => {
        const exerciseItemIndex = exercisesToDo.indexOf(exerciseName);
        exercisesToDo.splice(exerciseItemIndex, 1);
        setExercisesToDo([...exercisesToDo]);
    }

    useEffect(() => {
        if (showMaxExercisesAlert) {
            setTimeout(() => {
                setShowMaxExercisesAlert(false);
            }, 5000);
        }
    }, [showMaxExercisesAlert]);

    useEffect(() => {
        if (deathButtonClicked) {
            chooseRandomExercise();
        }
    }, [deathButtonClicked]);

    return (
        <>
            {showMaxExercisesAlert ? <ExerciseLimitAlert onCloseAlert={() => { setShowMaxExercisesAlert(false) }} /> : <></>}
            <Box sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '1', margin: '0 auto',
            }}>
                <ExerciseSelectionTable exercises={props.exercises}/>
                <Box sx={{
                    width: '100%', // Ensure ExerciseStack takes full width of its parent
                    marginTop: '150px',
                }}>
                    <ExerciseStack exercises={[...exercisesToDo].reverse()} onExerciseItemClick={onExerciseItemClick} />
                </Box>
            </Box>
        </>
    )
}

export default ExerciseTableAndCards 