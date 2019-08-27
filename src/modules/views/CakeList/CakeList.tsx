import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core'

import { ICake } from '../../models/cake';

export interface ICakeListProps {
    cakeMap: { [cakeId: number]: ICake };
    getCakeList: () => any;
}

const CakeList = ({ cakeMap, getCakeList }: ICakeListProps) => {
    useEffect(() => {
        getCakeList()
    }, [getCakeList]);

    return (
        <Container maxWidth="lg">
            <NavLink to="/cakes/new">New Cake</NavLink>
            <List>
                {Object.values(cakeMap).map(cake => (
                    <Link to={`/cakes/${cake.id}`} key={cake.id}>
                        <ListItem key={cake.id}>
                            <ListItemAvatar><Avatar src={cake.imageUrl} /></ListItemAvatar>
                            <ListItemText primary={cake.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Container>
    )
}

export default React.memo(CakeList);
