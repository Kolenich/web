import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import { CheckCircle, FileCopy } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { DATETIME_OPTIONS } from 'lib/constants';
import React, { FC } from 'react';
import styles from './styles';
import { IProps } from './types';

const useStyles = makeStyles(styles);

/**
 * Компонент карточки задания
 * @param {ICardTask} task - объект задания
 * @return {JSX.Element}
 * @constructor
 */
const TaskCard: FC<IProps> = ({ task }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="task" className={classes.avatar}>
            T
          </Avatar>
        }
        action={
          <IconButton aria-label="complete">
            <CheckCircle/>
          </IconButton>
        }
        title={task.summary}
        subheader={new Date(task.date_of_issue).toLocaleDateString('ru', DATETIME_OPTIONS)}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FileCopy/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
