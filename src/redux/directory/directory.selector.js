import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectionSection = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
