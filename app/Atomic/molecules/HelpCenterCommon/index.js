import React from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from 'icons/ArrowRightIcon';
import ArrowDownIcon from 'icons/ArrowDownIcon';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import AtomBox from '../../../../../Atomic/atoms/Box';
import AtomTypography from '../../../../../Atomic/atoms/Typography';
import AtomCardContentLarge from '../../../../../Atomic/atoms/CardContent/AtomCardContentLarge';
import HelpAnswer from './HelpAnswer';
import { dataHelpAnswer } from './dataHelpAnswer';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'none !important'
  },
  itemMargin: {
    marginBottom: theme.spacing(2)
  }
}));

// Data
const dataExample = [
  {
    question: 'Làm cách nào để nạp tiền vào tài khoản thanh toán của tôi?',
    answer: HelpAnswer,
    dataOfAnswer: dataHelpAnswer
  },
  {
    question: 'Làm cách nào để rút tiền từ tài khoản thanh toán của tôi?',
    answer: HelpAnswer,
    dataOfAnswer: dataHelpAnswer
  },
  {
    question: 'Làm cách nào để rút tiền từ tài khoản thanh toán của tôi?',
    answer: HelpAnswer,
    dataOfAnswer: dataHelpAnswer
  }
];

export default function HelpCenterCommon({
  treeViewProps,
  treeItemProps,
  boxProps,
  data
}) {
  const classes = useStyles();

  const [indexQuestion, setIndexQuestion] = React.useState(0);
  const handleIndexQuestion = i => {
    setIndexQuestion(i);
  };

  return (
    <AtomCardContentLarge>
      <TreeView
        defaultCollapseIcon={<ArrowDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        {...treeViewProps}
      >
        {data.map((item, index) => {
          const key = index;
          return (
            <TreeItem
              className={classes.itemMargin}
              onLabelClick={() => handleIndexQuestion(index)}
              key={key}
              nodeId={String(key)}
              label={
                <AtomTypography
                  color={indexQuestion === index ? 'primary' : 'inherit'}
                >
                  <b>{item.question}</b>
                </AtomTypography>
              }
              classes={{ label: classes.root }}
              {...treeItemProps}
            >
              <AtomBox p={1} {...boxProps}>
                <item.answer data={item.dataOfAnswer[index]} />
              </AtomBox>
            </TreeItem>
          );
        })}
      </TreeView>
    </AtomCardContentLarge>
  );
}

HelpCenterCommon.propTypes = {
  data: PropTypes.any, // Bao gồm: 'Question', Component của 'Answer', Data của Component của 'Answer'
  treeViewProps: PropTypes.any,
  treeItemProps: PropTypes.any,
  boxProps: PropTypes.any
};

HelpCenterCommon.defaultProps = {
  data: dataExample
};
