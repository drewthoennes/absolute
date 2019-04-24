import store from '@/store';
import {getTimeElapsed} from '@/utils';
import {
  addLine,
  enableFire,
  enableTraps,
  enableStonyPath,
  demandPayment
} from '@/store/actions';
import { decGold } from '../../store/actions/inventory';

let events = {
  fireEnable: {
    req: {
      wood: 15 //Return to 15 wood
    },
    action: () => {
      let line = 'Wood can be used to start a fire to attract others.';
      store.dispatch(addLine(line, getTimeElapsed()));
      store.dispatch(enableFire());
    }
  },
  trapsEnable: {
    req: {
      wood: 50  //Return to 50 woods
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
      getTimeElapsed: 30 //Currently obsolete
    },
    interval:{
      time: 300
    },
    action: () => {
      console.log("demanding");
      let payment = Math.floor(getTimeElapsed() / 150 + 10);
      console.log(payment);
      store.dispatch(addLine("Twightlight is falling.", getTimeElapsed()));
      let random = Math.floor(Math.random() * 3);
      //store.dispatch(addLine(random, getTimeElapsed() + 1));
      if(random == 0){
        store.dispatch(addLine("A chill runs down your spine.", getTimeElapsed() + 10));
      }else if (random == 1){
        store.dispatch(addLine("Your fingers start to go numb.", getTimeElapsed() + 14));
      }else if (random == 2){
        store.dispatch(addLine("You hear the bleating of lambs in the distance.", getTimeElapsed() + 6));
      }
      //}else if (random == 3){
      //  store.dispatch(addLine("The fire suddenly goes out", getTimeElapsed + 4));
          //Todo: Build Dis_Fire method to disable the fire.
      //}

      
      store.dispatch(addLine("The strange figure approaches.", getTimeElapsed() + 30));
      store.dispatch(addLine("It demands payment.", getTimeElapsed() + 33));
      store.dispatch(addLine(payment + " gold will do, for now...", getTimeElapsed() + 36));
      //store.dispatch(addLine("The strange figure approaches", getTimeElapsed() + 20));
      //store.dispatch(addLine("you don't scare me!" + getTimeElapsed(), getTimeElapsed() + 2));
    }

  },
  takePayment: {
    interval:{
      time: 300//same a interval.time for demandpayment
    }, 
    action: () => {
      console.log("taking");
      let payment = Math.floor((getTimeElapsed() - 39) / 150 + 10);
      console.log("take " + payment);
      if(store.getState().inventory.gold.quantity >= payment){
        store.dispatch(decGold(payment));
      }else{
        console.log("you die");
      }
      
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

  let lastTime;

  if(!lastTime){
    lastTime = -1;
  }

  if (getTimeElapsed()%events.demandPayment.interval.time == events.demandPayment.interval.time - 40 && !events.demandPayment.done) {
    events.demandPayment.action();
    events.demandPayment.done = true;
    lastTime = getTimeElapsed();
    events.demandPayment.done = true;
  }else if(lastTime != getTimeElapsed()){
    events.demandPayment.done = false;
  }

  if (getTimeElapsed()%events.takePayment.interval.time == events.takePayment.interval.time - 1 && !events.takePayment.done) {
    events.takePayment.action();
    events.takePayment.done = true;
    lastTime = getTimeElapsed();
    events.takePayment.done = true;
  }else if(lastTime != getTimeElapsed()){
    events.takePayment.done = false;
  }

}

export {tick}
