import React from 'react';
import { FormattedMessage } from 'react-intl';

const baseSortFilterConfig = {
  name: 'sort',
  label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.sortOptions.label" />,
  defaultValue: 'relevance',
};

const packageSortFilterConfig = {
  ...baseSortFilterConfig,
  options: [
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.sortOptions.relevance" />, value: 'relevance' },
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.sortOptions.package" />, value: 'name' },
  ]
};

const selectionStatusFilterConfig = {
  name: 'selected',
  label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.selectionStatus" />,
  defaultValue: 'all',
  options: [
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.selectionStatus.all" />, value: 'all' },
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.selectionStatus.selected" />, value: 'true' },
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.selectionStatus.notSelected" />, value: 'false' },
  ]
};

const contentTypeFilterConfig = {
  name: 'type',
  label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.contentType" />,
  defaultValue: 'all',
  options: [
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.contentType.all" />, value: 'all' },
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.contentType.aggregated" />, value: 'aggregatedfulltext' },
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.contentType.abstract" />, value: 'abstractandindex' },
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.contentType.ebook" />, value: 'ebook' },
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.contentType.ejournal" />, value: 'ejournal' },
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.contentType.print" />, value: 'print' },
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.contentType.onlineRef" />, value: 'onlinereference' },
    { label: <FormattedMessage id="ui-plugin-find-package-title.searchPane.filters.contentType.unknown" />, value: 'unknown' }
  ]
};

export const packageFilters = [
  packageSortFilterConfig,
  selectionStatusFilterConfig,
  contentTypeFilterConfig,
];

export const titleFilters = [

];
