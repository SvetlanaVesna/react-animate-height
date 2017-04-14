var React = require('react');
var ReactDOM = require('react-dom');
var AnimateHeight = require('react-animate-height-vesna');

var Example = class extends React.Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      height2: 'auto',
    };
  }

  render() {
    const {
      height,
      height2,
    } = this.state;

    return (
      <div>
        <h3>Demo, starting height = 0</h3>
        <p>
          Current Height: <b>{ height !== null ? height : 'null' }</b>
        </p>
        <p className=''>Set height to:</p>
        <div className='buttons'>
          <button className='btn btn-sm btn-dark' onClick={ () => this.setState({ height: 0 }) }>
            0
          </button>
          <button className='btn btn-sm btn-dark' onClick={ () => this.setState({ height: 100 }) }>
            100
          </button>
          <button className='btn btn-sm btn-dark' onClick={ () => this.setState({ height: 200 }) }>
            200
          </button>
          <button className='btn btn-sm btn-dark' onClick={ () => this.setState({ height: 300 }) }>
            300
          </button>
          <button className='btn btn-sm btn-dark' onClick={ () => this.setState({ height: 'auto' }) }>
            auto
          </button>
        </div>
        <AnimateHeight
          height={ height }
          className='demo demo-1'
        >
          <div className='demo-content'>
            <p>
              It looked serious, but we in California, like everywhere else, were
              not alarmed. We were sure that the bacteriologists would find a way to
              overcome this new germ, just as they had overcome other germs in the
              past. But the trouble was the astonishing quickness with which this germ
              destroyed human beings, and the fact that it inevitably killed any
              human body it entered. No one ever recovered. There was the old Asiatic
              cholera, when you might eat dinner with a well man in the evening, and
              the next morning, if you got up early enough, you would see him being
              hauled by your window in the death-cart. But this new plague was quicker
              than that&mdash;much quicker.</p>
            <p>
              From the moment of the first signs of it, a man would be dead in an
              hour. Some lasted for several hours. Many died within ten or fifteen
              minutes of the appearance of the first signs.
            </p>
            <p>
              The heart began to beat faster and the heat of the body to increase.
              Then came the scarlet rash, spreading like wildfire over the face and
              body. Most persons never noticed the increase in heat and heart-beat,
              and the first they knew was when the scarlet rash came out. Usually,
              they had convulsions at the time of the appearance of the rash. But
              these convulsions did not last long and were not very severe. If one
              lived through them, he became perfectly quiet, and only did he feel a
              numbness swiftly creeping up his body from the feet. The heels became
              numb first, then the legs, and hips, and when the numbness reached
              as high as his heart he died. They did not rave or sleep. Their minds
              always remained cool and calm up to the moment their heart numbed and
              stopped. And another strange thing was the rapidity of decomposition. No
              sooner was a person dead than the body seemed to fall to pieces, to
              fly apart, to melt away even as you looked at it. That was one of the
              reasons the plague spread so rapidly. All the billions of germs in a
              corpse were so immediately released.
            </p>
          </div>
        </AnimateHeight>

        <h3>Demo, starting height = auto</h3>
        <p>
          Current Height: <b>{ height !== null ? height2 : 'null' }</b>
        </p>
        <p className=''>Set height to:</p>
        <div className='buttons'>
          <button className='btn btn-sm btn-dark' onClick={ () => this.setState({ height2: 0 }) }>
            0
          </button>
          <button className='btn btn-sm btn-dark' onClick={ () => this.setState({ height2: 100 }) }>
            100
          </button>
          <button className='btn btn-sm btn-dark' onClick={ () => this.setState({ height2: 200 }) }>
            200
          </button>
          <button className='btn btn-sm btn-dark' onClick={ () => this.setState({ height2: 300 }) }>
            300
          </button>
          <button className='btn btn-sm btn-dark' onClick={ () => this.setState({ height2: 'auto' }) }>
            auto
          </button>
        </div>
        <AnimateHeight
          height={ height2 }
          className='demo demo-2'
        >
          <div className='demo-content'>
            <p>
              It looked serious, but we in California, like everywhere else, were
              not alarmed. We were sure that the bacteriologists would find a way to
              overcome this new germ, just as they had overcome other germs in the
              past. But the trouble was the astonishing quickness with which this germ
              destroyed human beings, and the fact that it inevitably killed any
              human body it entered. No one ever recovered. There was the old Asiatic
              cholera, when you might eat dinner with a well man in the evening, and
              the next morning, if you got up early enough, you would see him being
              hauled by your window in the death-cart. But this new plague was quicker
              than that&mdash;much quicker.</p>
            <p>
              From the moment of the first signs of it, a man would be dead in an
              hour. Some lasted for several hours. Many died within ten or fifteen
              minutes of the appearance of the first signs.
            </p>
            <p>
              The heart began to beat faster and the heat of the body to increase.
              Then came the scarlet rash, spreading like wildfire over the face and
              body. Most persons never noticed the increase in heat and heart-beat,
              and the first they knew was when the scarlet rash came out. Usually,
              they had convulsions at the time of the appearance of the rash. But
              these convulsions did not last long and were not very severe. If one
              lived through them, he became perfectly quiet, and only did he feel a
              numbness swiftly creeping up his body from the feet. The heels became
              numb first, then the legs, and hips, and when the numbness reached
              as high as his heart he died. They did not rave or sleep. Their minds
              always remained cool and calm up to the moment their heart numbed and
              stopped. And another strange thing was the rapidity of decomposition. No
              sooner was a person dead than the body seemed to fall to pieces, to
              fly apart, to melt away even as you looked at it. That was one of the
              reasons the plague spread so rapidly. All the billions of germs in a
              corpse were so immediately released.
            </p>
          </div>
        </AnimateHeight>
      </div>
    );
  }
}


ReactDOM.render(<Example />, document.getElementById('demo'));
