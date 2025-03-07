'use client';

import { Section } from '../../ui/Section';
import { SectionHeader } from '../../ui/SectionHeader';
import Journey from './Journey';
import Stats from './Stats';
import Skills from './Skills';

const AboutSection = () => {
    return (
        <Section id="about">
            <SectionHeader
                title="About Me"
                description='I am a software engineer with a passion for building modern web applications that combine beautiful design with powerful functionality.'
            />
            <div className="grid lg:grid-cols-2 gap-4 mb-4">
                <Journey />
                <Stats />
            </div>
            <Skills />
        </Section>
    );
};

export default AboutSection; 