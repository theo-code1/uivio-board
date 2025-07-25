import * as React from "react";

function BiMessageRounded({...props }) {
  return <svg className={'size-11 mb-2'} stroke="currentColor" fill="#ABABB0" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><path d="M12,2C6.486,2,2,5.589,2,10c0,2.908,1.898,5.516,5,6.934V22l5.34-4.005C17.697,17.852,22,14.32,22,10 C22,5.589,17.514,2,12,2z M12,16h-0.333L9,18v-2.417l-0.641-0.247C5.67,14.301,4,12.256,4,10c0-3.309,3.589-6,8-6s8,2.691,8,6 C20,13.309,16.411,16,12,16z" /></svg>;
}

export default BiMessageRounded;