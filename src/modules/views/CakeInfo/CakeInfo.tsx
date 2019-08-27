import React, { useEffect } from 'react';

import { ICake } from '../../models/cake';
import { NavLink } from 'react-router-dom';

export interface ICakeProps {
    cake: ICake | null;
    isLoadingCake: boolean
    getCake: (cakeId: string) => void;
    match: { params: { id: string } };
}

const CakeInfo = ({ cake, isLoadingCake, getCake, match }: ICakeProps) => {
    useEffect(() => {
        getCake(match.params.id);
    }, [getCake, match]);

    if(!cake) return null;

    return (
        <div>
            <NavLink to={"/cakes"}>Back</NavLink>
            {isLoadingCake ? "Loading..." : (
                <div>
                    <p>Name: {cake.name}</p>
                    <p>Comment: {cake.comment}</p>
                </div>
            )}
        </div>
    )
};

export default React.memo(CakeInfo);
