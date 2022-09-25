import { NextPage } from 'next';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import React from 'react';
import usePreventBodyScroll from '@hooks/usePreventBodyScroll';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const ProjectPage: NextPage = () => {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
      <ScrollMenu onWheel={onWheel}>
        {items.map(({ id }) => (
          <Card
            itemId={id} // NOTE: itemId is required for track items
            title={id}
            key={id}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

function Card({ title, itemId }: { title: string; itemId: string }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      style={{
        width: '160px'
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
      </div>
      <div
        style={{
          height: '200px'
        }}
      />
    </div>
  );
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default ProjectPage;
