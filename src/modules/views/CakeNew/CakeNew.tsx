import React, { useCallback, useState, ChangeEvent } from 'react';
import { TextField, Button, FormControl, InputLabel, Input } from '@material-ui/core';

export interface ICakeNewProps {
    createCake: (name: string, comment: string, yumFactor: number) => void;
}

export interface ICakeNewState {
    name: string;
    comment: string;
    yumFactor: number
}

const CakeNew = ({ createCake }: ICakeNewProps) => {
    const [state, setState] = useState<ICakeNewState>({ name: '', comment: '', yumFactor: 1 });

    const handleOnChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => setState({ ...state, name: event.target.value }), [state, setState]);
    const handleOnChangeComment = useCallback((event: ChangeEvent<HTMLInputElement>) => setState({ ...state, comment: event.target.value }), [state, setState]);
    const handleOnChangeYumFactor = useCallback((event: ChangeEvent<HTMLInputElement>) => setState({ ...state, yumFactor: parseInt(event.target.value) }), [state, setState]);

    const isFormValid = useCallback(() => state.name.length && state.comment.length && state.yumFactor > 0 && state.yumFactor < 6, [state]);

    const handleSubmit = useCallback(() => {
        if (isFormValid()) createCake(state.name, state.comment, state.yumFactor)
    }, [state, createCake, isFormValid]);

    return (
        <form onSubmit={handleSubmit}>
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
            <Button onClick={handleSubmit} disabled={!isFormValid()}>Save</Button>
        </form>
    )
}

export default React.memo(CakeNew);