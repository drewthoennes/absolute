import store from '@/store';
import {getTimeElapsed} from '@/utils';
import {
  addLine,
  enableFire,
  enableTraps
} from '@/store/actions';

let events = {
  fireEnable: {
    req: {
      wood: 15
    },
    action: () => {
      let line = 'Wood can be used to start a fire to attract others';
      store.dispatch(addLine(line, getTimeElapsed()));
      store.dispatch(enableFire());
    }
  },
  trapsEnable: {
    req: {
      wood: 50
    },
    action: () => {
      let line = 'Traps can catch what you cannot.';
      store.dispatch(addLine(line, getTimeElapsed()));
      store.dispatch(enableTraps());
    }
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

  if (!events.fireEnable.done && ready(inventory, events.fireEnable.req)) {
    events.fireEnable.action();
    events.fireEnable.done = true;
  }

  if (!events.trapsEnable.done && ready(inventory, events.trapsEnable.req)) {
    events.trapsEnable.action();
    events.trapsEnable.done = true;
  }
}

export {tick}
