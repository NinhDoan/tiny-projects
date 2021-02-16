import { h } from 'preact';

import Nav from '../components/Nav'
import HeroSection from '../components/heroSection'
import SkillsSection from '../components/skillsSection'

const App = () =>
{
	return (
		<>
			<Nav />
			<HeroSection />
			<SkillsSection />
		</>
	)
}

export default App;
