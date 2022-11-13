/*
 * @Author: wulongjiang
 * @Date: 2022-11-12 13:18:07
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-12 18:47:10
 * @Description:中分彩蛋
 * @FilePath: \blog\src\views\Home\children\surprise\index.tsx
 */
import { memo, useEffect, RefObject, useState, useRef } from 'react';
import cxk from '@/assets/img/cxk.png';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
interface Properties {
  el: RefObject<HTMLElement>;
}

const Surprise = memo(({ el }: Properties) => {
  const [test, setTest] = useState(false);
  const imgRef = useRef(null);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(true);

  function onExited() {
    console.log(111);
    setOverlayVisible(false);
  }

  useEffect(() => {
    if (el.current) {
      const top = el.current.getBoundingClientRect().top;
      const left = el.current.getBoundingClientRect().left;
      setTop(top);
      setLeft(left);
      setTest(true);
    }
  }, [el]);

  return (
    <div
      className={classNames('fixed top-0 left-0 w-screen h-screen  opacity-80', {
        'bg-black': overlayVisible
      })}
    >
      <CSSTransition
        nodeRef={imgRef}
        timeout={3000}
        in={test}
        onEntered={onExited}
        classNames={{
          enter: 'surprise-checked-enter',
          enterActive: 'surprise-checked-enter-active'
        }}
      >
        <div
          ref={imgRef}
          className={'absolute'}
          style={{ top: `${top - 5}px`, left: `${left + 7}px` }}
        >
          <img className="w-6 object-contain" src={cxk} />
        </div>
      </CSSTransition>
    </div>
  );
});

Surprise.displayName = 'Surprise';

export default Surprise;