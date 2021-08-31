<!-- cuộn đến 1 vị trí bất kỳ -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView -->
<!-- https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element -->

const myRef = React.useRef(null);

const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });

<div ref={myRef}>

<button onClick={executeScroll}>
