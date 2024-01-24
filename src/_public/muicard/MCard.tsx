import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, IconButtonProps, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AddComment,  ExpandMoreOutlined,  Favorite } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import React, { FC } from 'react';
import { todo } from '../todo/todo';

interface ExpanMoreProps extends IconButtonProps{
    expand: boolean;
}

const ExpandMore = styled((props: ExpanMoreProps)=>{
    const {expand, ...other} = props;
    return<IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform',{
        duration: theme.transitions.duration.shortest,
    }),
}));

interface TodoMCardProps extends React.HTMLAttributes<HTMLParagraphElement>{
  todo: todo;
  innerRef?: React.Ref<HTMLParagraphElement> /*responsible for infinite scroll */
}

const MCard: FC<TodoMCardProps> = ({todo, innerRef,...props}) => {
    /* expand comment area */
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };  
    /* ................. */

  return (
    <div key={todo.id} ref={innerRef} {...props}>
      <Card>
        <CardHeader
          avatar={<Avatar>R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`quarter : ${todo.title}`}
          subheader="Sep 23 1972"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {/* <p key={todo.id} ref={innerRef} {...props}>
                {todo.title}
                </p>
                 */}
            this is the body
            <p>{todo.title}</p>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favrites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <AddComment />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show comment"
          >
            <ExpandMoreOutlined />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography paragraph>Comment area</Typography>
        </Collapse>
      </Card>
    </div>
  );
}

export default MCard