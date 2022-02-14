import { h } from 'preact';

import { TabHeader } from './TabsHeader.js';
import { TabContent } from './TabContent.js';
import { TabHeaderItem } from './TabHeaderItem.js';
import style from './style.css';

export const Tabs = ({
                       children,
                       activeTab = 0,
                       renderInactive,
                       onChangeTab,
                     }) => {
  const { header, body } = tabsToRender(
    children,
    activeTab,
    tabId => () => onChangeTab(tabId),
    renderInactive,
  );
  return (
    <div class={style.tabPanel}>
      <TabHeader>
        {header}
      </TabHeader>
      <TabContent>
        {body}
      </TabContent>
    </div>
  );
};

function tabsToRender(tabs, activeTab, getHandleChangeTab, lazyLoad) {
  const initialValue = {
    header: [],
    body: [],
  };

  return tabs.reduce((acc, tab, idx) => {
    const isActive = activeTab === idx;
    const renderContent = isActive || lazyLoad;
    const { title } = tab.props;

    const HeaderItem = (
      <TabHeaderItem
        key={idx}
        active={isActive}
        onSelect={getHandleChangeTab(idx)}
      >
        {title}
      </TabHeaderItem>
    );

    const ContentItem = renderContent ? tab : null;

    tab.props.active = isActive;
    tab.key = idx;

    return {
      header: [...acc.header, HeaderItem],
      body: [...acc.body, ContentItem],
    };
  }, initialValue);
}
