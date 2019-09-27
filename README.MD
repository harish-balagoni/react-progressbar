# react-progressbar-circle 

An [React](https://reactjs.org/) component for styling proggressbar.

## Install

```
npm install react-progressbar-circle
```

## How to use

```ts
import ProgressBar from 'react-progressbar-circle';
import * as React from 'react';

class Progress extends React.Component<any,any>{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ProgressBar 
          sqSize={100}
          strokeWidth={10}
          percentage={90}
          color={'#ffff'}
        >
        </ProgressBar>
      </div>
    );
  }
}
```

## Options

| Prop        | description                      | default value  |
| ------------|:--------------------------------:| --------------:|
| sqSize      | Size of the progressbar.         | 100            |
| strokeWidth | Width of the arc.                | 10             |
| percentage  | To sgow the completedpercentage. | 80             |
| color       | Color of the progressbar arc.    | #fffff         |

And that's it.

## License

[MIT](LICENSE)
