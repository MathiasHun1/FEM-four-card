import { COLORS } from './constants';

import Header from './compnents/Header';
import Card from './compnents/Card';

import svgSupervisor from './assets/icon-supervisor.svg';
import svgTeam from './assets/icon-team-builder.svg';
import svgCalc from './assets/icon-calculator.svg';
import svgKarma from './assets/icon-karma.svg';

function App() {
  return (
    <div className="wrapper-app">
      <Header />

      <main>
        <Card imgSource={svgSupervisor} fillColor={COLORS.cyan} className="card1">
          <h2>Supervisor</h2>
          <p> Monitors activity to identify project roadblocks</p>
        </Card>

        <Card imgSource={svgTeam} fillColor={COLORS.red} className="card2">
          <h2>Team Builder</h2>
          <p> Scans our talent network to create the optimal team for your project</p>
        </Card>

        <Card imgSource={svgKarma} fillColor={COLORS.orange} className="card3">
          <h2>Karma</h2>
          <p> Regularly evaluates our talent to ensure quality</p>
        </Card>

        <Card imgSource={svgCalc} fillColor={COLORS.blue} className="card4">
          <h2>Calculator</h2>
          <p>Uses data from past projects to provide better delivery estimates</p>
        </Card>
      </main>
    </div>
  );
}

export default App;
