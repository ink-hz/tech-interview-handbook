import withHref from '~/utils/questions/withHref';

import type { BaseQuestionCardProps } from './BaseQuestionCard';
import BaseQuestionCard from './BaseQuestionCard';

export type QuestionListCardProps = Omit<
  BaseQuestionCardProps & {
    showActionButton: false;
    showAnswerStatistics: false;
    showDeleteButton: true;
    showVoteButtons: false;
  },
  | 'actionButtonLabel'
  | 'onActionButtonClick'
  | 'showActionButton'
  | 'showAnswerStatistics'
  | 'showDeleteButton'
  | 'showVoteButtons'
>;

function QuestionListCardWithoutHref(props: QuestionListCardProps) {
  return (
    <BaseQuestionCard
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      showActionButton={false}
      showAnswerStatistics={false}
      showDeleteButton={true}
      showHover={true}
      showVoteButtons={false}
    />
  );
}

const QuestionListCard = withHref(QuestionListCardWithoutHref);
export default QuestionListCard;
