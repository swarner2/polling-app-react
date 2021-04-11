import { Avatar, Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import React from 'react';
import { OptionStatsModel, QuestionModel, QuestionOptionStatsModel } from '../../models/question.model';
import { UserModel } from '../../models/user.model';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    maxWidth: 345,
  },
  content: {
    paddingLeft: 28,
    paddingTop: 0,
  }
});


export default function QuestionInfo(props: {author: UserModel, question: QuestionModel, user: UserModel}) {
  const classes = useStyles();
  const questionOptionStats = new QuestionOptionStatsModel(props.question, props.user)
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader avatar={<Avatar alt={props.author.name} src={props.author.avatarURL} />} title={<h1>Would You Rather</h1>}></CardHeader>
        <CardContent className={classes.content}>
          <OptionInfoCard optionStats={questionOptionStats.optionOne}></OptionInfoCard>
          <OptionInfoCard optionStats={questionOptionStats.optionTwo}></OptionInfoCard>          
        </CardContent>
      </Card>
    </div>
  );
}


function OptionInfoCard(props: { optionStats: OptionStatsModel}) {
  return (
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            {props.optionStats.text} 
            {props.optionStats.isUsersAnswer 
              ? <CheckCircleOutlineRoundedIcon />
              : null}
          </Typography>
          { props.optionStats.isUsersAnswer ? <div>Your Vote</div> : null}
          <Typography variant="body2" color="textSecondary" component="p">
            <div>Number Of Votes: {props.optionStats.numberOfVotes | 0}</div>
            <div>Percentage Of Votes: {props.optionStats.percentageOfVotes}</div>
          </Typography>
        </div>
  );
}