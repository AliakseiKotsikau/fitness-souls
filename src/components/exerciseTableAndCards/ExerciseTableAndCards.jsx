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

    const chooseRandomExercise = () => {

        dispatch(exerciseSelected());
        if (limitOfExercisesReached) {
            setShowMaxExercisesAlert(true);
            return;
        }

        const randomizedExercise = getRandomElement(getOnlyActiveExercises());
        const numberOfReps = getRandomNumberFromRange(+props.exercises[randomizedExercise].minReps, +props.exercises[randomizedExercise].maxReps);

        //setRandomizedExerciseIndex(indexOfRandomizedExercise);

        const exerciseCard = { "exercise": randomizedExercise, "reps": numberOfReps };

        exercisesToDo.push(exerciseCard);
        setExercisesToDo(exercisesToDo);

        if (exercisesToDo.length === LIMIT_OF_EXERCISES) {
            setLimitOfExercisesReached(true);
        }
    }

    const getOnlyActiveExercises = () => {
        return Object.keys(props.exercises).filter(key => props.exercises[key].active);
    }

    const getRandomElement = (array) => {
        if (array.length === 0) {
            throw new Error("Array is empty");
        }
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function getRandomNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    const onExerciseItemClick = (exerciseName, exerciseReps) => {
        const exerciseItemIndex = exercisesToDo.findIndex(item =>
            item.exercise === exerciseName && item.reps === exerciseReps
        );
        const finishedExercise = exercisesToDo.splice(exerciseItemIndex, 1);
        setExercisesToDo([...exercisesToDo]);

        if (exercisesToDo.length < LIMIT_OF_EXERCISES) {
            setLimitOfExercisesReached(false);
        }

        props.handleExerciseStatisticsUpdate(props.exercises[finishedExercise[0].exercise].type, finishedExercise[0].reps);
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
                <ExerciseSelectionTable exercises={props.exercises} onExerciseUpdate={props.onExerciseUpdate} />
                <Box sx={{
                    width: '100%', // Ensure ExerciseStack takes full width of its parent
                    marginTop: '20px',
                }}>
                    <ExerciseStack exerciseCards={[...exercisesToDo].reverse()} onExerciseItemClick={onExerciseItemClick} />
                </Box>
            </Box>
        </>
    )
}

export default ExerciseTableAndCards 