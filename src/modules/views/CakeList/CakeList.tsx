import React from 'react';
import { Container, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core'

import { ICake } from '../../models/cake';

export interface ICakeListProps {
    cakeList: ICake[];
}

const CakeList = ({ cakeList }: ICakeListProps) => {
    return (
        <Container maxWidth="lg">
            <List>
                {cakeList.map(cake => (
                    <ListItem key={cake.id}>
                        <ListItemAvatar><Avatar src={cake.imageUrl} /></ListItemAvatar>
                        <ListItemText primary={cake.name} />
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default React.memo(CakeList);