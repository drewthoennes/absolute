import store from '@/store';
import {addLine} from '@/store/actions';
import {getTimeElapsed} from '@/utils';

let events = {
  fireEnable: {
    line: 'Wood can be used to start a fire to attract others',
    requirements: {
      wood: 15
    },
    done: false
  }
}

function ready(inventory, requirements) {
  for (let requirement in requirements) {
    if (inventory[requirement].quantity < requirements[requirement]) {
      return false;
    }
  }

  return true;
}

function tick() {
  let inventory = store.getState().inventory;

  if (events.fireEnable && !events.fireEnable.done && ready(inventory, events.fireEnable.requirements)) {
    console.log('Enable fire');
    store.dispatch(addLine(events.fireEnable.line, getTimeElapsed()));
    delete events.fireEnable;
  }
}

export {
  tick
}
