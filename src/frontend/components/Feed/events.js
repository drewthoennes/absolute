import store from '@/store';
import {getTimeElapsed} from '@/utils';
import {
  addLine,
  enableFire,
  enableTraps,
  enableStonyPath,
  demandPayment
} from '@/store/actions';

let events = {
  fireEnable: {
    req: {
      wood: 5 //Return to 15 wood
    },
    action: () => {
      let line = 'Wood can be used to start a fire to attract others.';
      store.dispatch(addLine(line, getTimeElapsed()));
      store.dispatch(enableFire());
    }
  },
  trapsEnable: {
    req: {
      wood: 10  //Return to 50 woods
    },
    action: () => {
      let line = 'Traps can catch what you cannot.';
      store.dispatch(addLine(line, getTimeElapsed()));
      store.dispatch(enableTraps());
    }
  },
  stonyPathEnable: {
    req: {
      traps: 1
    },
    action: () => {
      let line = 'You discover a small path not far from the clearing.';
      store.dispatch(addLine(line, getTimeElapsed()));
      store.dispatch(enableStonyPath());
    }
  },
  demandPayment: {
    req:{
      getTimeElapsed: 30
    },
    action: () => {
      store.dispatch(addLine("testing", getTimeElapsed()));
      store.dispatch(addLine("your doom is here", getTimeElapsed()));
      store.dispatch(addLine("you don't scare me!", getTimeElapsed() + 1));
      store.dispatch(addLine("I here to save you!", getTimeElapsed() + 2));
      store.dispatch(enableStonyPath());
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

  if (!events.stonyPathEnable.done && ready(inventory, events.stonyPathEnable.req)) {
    events.stonyPathEnable.action();
    events.stonyPathEnable.done = true;
  }

}

export {tick}
