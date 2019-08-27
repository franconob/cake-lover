import React, { useCallback, useState, ChangeEvent } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export interface ICakeNewProps {
    createCake: (name: string, comment: string, yumFactor: number, imageUrl: string) => void;
    history: any;
}

export interface ICakeNewState {
    name: string;
    comment: string;
    yumFactor: number;
    imageUrl: string;
}

const CakeNew = ({ createCake, history }: ICakeNewProps) => {
    const [state, setState] = useState<ICakeNewState>({ name: '', comment: '', yumFactor: 1, imageUrl: ''});

    const handleOnChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => setState({
        ...state,
        name: event.target.value
    }), [state, setState]);
    const handleOnChangeComment = useCallback((event: ChangeEvent<HTMLInputElement>) => setState({
        ...state,
        comment: event.target.value
    }), [state, setState]);
    const handleOnChangeYumFactor = useCallback((event: ChangeEvent<HTMLInputElement>) => setState({
        ...state,
        yumFactor: parseInt(event.target.value)
    }), [state, setState]);

    const handleOnChangeImage = useCallback((event: ChangeEvent<HTMLInputElement>) => setState({
        ...state,
        imageUrl: event.target.value
    }), [state, setState]);

    const isFormValid = useCallback(() => state.name.length && state.comment.length && state.yumFactor > 0 && state.yumFactor < 6, [state]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (isFormValid()) {
            createCake(state.name, state.comment, state.yumFactor, state.imageUrl);
            history.push('/cakes');
        }
    }, [state, createCake, isFormValid, history]);

    return (
        <form onSubmit={handleSubmit}>
            <NavLink to="/cakes">Back</NavLink>
            <FormControl>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" onChange={handleOnChangeName} value={state.name} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="comment">Comments</InputLabel>
                <Input id="comment" onChange={handleOnChangeComment} multiline />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="yum-factor">Yum factor</InputLabel>
                <Input type="number" onChange={handleOnChangeYumFactor} value={state.yumFactor} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="image-url">Image URL</InputLabel>
                <Input type="text" onChange={handleOnChangeImage} value={state.imageUrl} />
            </FormControl>
            <Button onClick={handleSubmit} disabled={!isFormValid()}>Save</Button>
        </form>
    )
}

export default React.memo(CakeNew);
