const Fs = require('fs')

const _new = (option, name) => {
  if(option === 'component') {
    const paths = {
      components: $path.join($path.resolve(process.cwd()), 'components'),
      component: $path.join($path.resolve(process.cwd()), 'components', name),
      index: $path.join($path.resolve(process.cwd()), 'components', 'index.js')
    }
    
    if(!Fs.existsSync(paths.components)) Fs.mkdirSync(paths.components);
    if(!Fs.existsSync(paths.component)) Fs.mkdirSync(paths.components);
    if(!Fs.existsSync(paths.index)) Fs.mkdirSync(paths.index, '');

    const Name = name.substring(0, 1).toUppercase() + name.substring(1)
    Fs.writeFileSync($path.join(paths.component, `${name}.jsx`),
`import React,{Component} from 'react';

class ${Name} extends Component {
  state = {};
  render() {
    return <div>${name}</div>;
  }
}

export default ${Name};
      `
    );

    Fs.writeFileSync($path.join(paths.component, `${name}.css`), '');

    Fs.writeFileSync($path.join(paths.component, `index.js`),
`import ${Name} from './${name}';
import './${name}.css';

export default ${Name};
`    
    );

    Fs.appendFileSync(paths.index, `\nexport { default as ${Name} } from './${name}/';`);

    console.log(`new ${name} component success!`);
  }
}

module.exports = _new