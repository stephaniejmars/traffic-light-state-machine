import { createMachine, interpret } from 'xstate';

const lightMachine = Machine({
  // Your state machine blueprint here
  
  id: 'lightToggle',
  initial: 'red', 
  states: {
    red: {
      on: {
        changeLight: 'green'
      },
    }, 
    green: {
      on:{
        changeLight: 'yellow'
      },
    },
    yellow: {
      on: {
        changeLight: 'red', 
      },
    },
  },
});


const service = interpret(lightMachine);

export { lightMachine, service };