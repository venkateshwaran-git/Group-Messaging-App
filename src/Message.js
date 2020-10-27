import React, { forwardRef } from 'react';
import { CardContent, Card, Typography } from "@material-ui/core";
import './Message.css';

const Message = forwardRef(({text, username}, ref) => {
const isuser = username===text.username;

    return (
        <div ref={ref}>
    <Card className={isuser ? "messagecard_user" : "messagecard_guest"}>
      <CardContent>
        <Typography colour='grey' variant="h5" component="h2">
        {!isuser && `${text.username || 'Unknown User'}: `}{text.message}
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
})

export default Message