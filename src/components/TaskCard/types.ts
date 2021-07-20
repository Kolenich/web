export interface ICardTask {
  readonly id: number;
  summary: string;
  description: string;
  comment: string | null;
  date_of_issue: string;
  dead_line: string;
  assigned_by: string;
}

export interface IProps {
  task: ICardTask;
}
