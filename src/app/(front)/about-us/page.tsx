import React from 'react';
import fs from 'fs';
import path from 'path';

function readAboutContent(): string {
    const filePath = path.join(process.cwd(), 'about_us.txt');
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        return 'About content not found.';
    }
}

function renderContent(text: string): React.ReactNode {
    const lines = text.split(/\r?\n/);
    const nodes: React.ReactNode[] = [];

    let listBuffer: string[] = [];
    const flushList = () => {
        if (listBuffer.length > 0) {
            nodes.push(
                <ul key={`ul-${nodes.length}`} className="list-disc pl-6 space-y-2">
                    {listBuffer.map((item, idx) => (
                        <li key={idx}>{item.replace(/^•\s?/, '')}</li>
                    ))}
                </ul>
            );
            listBuffer = [];
        }
    };

    lines.forEach((rawLine) => {
        const line = rawLine.trimEnd();
        if (line.trim() === '') {
            flushList();
            nodes.push(<div key={`br-${nodes.length}`} className="h-4" />);
            return;
        }

        if (/^•\s?/.test(line)) {
            listBuffer.push(line);
            return;
        }

        flushList();

        // Heuristic: treat short, title-like lines as headings
        const isHeading = (line.length <= 60 && /:|—|-/.test(line)) || (/^[A-Z].+$/u.test(line) && line.split(' ').length <= 10);
        if (isHeading) {
            nodes.push(
                <h3 key={`h-${nodes.length}`} className="text-2xl md:text-3xl font-semibold text-white/90 tracking-tight">
                    {line}
                </h3>
            );
        } else {
            nodes.push(
                <p key={`p-${nodes.length}`} className="text-base md:text-lg leading-7 text-white/80">
                    {line}
                </p>
            );
        }
    });

    // Flush any trailing list
    if (listBuffer.length > 0) {
        nodes.push(
            <ul key={`ul-${nodes.length}`} className="list-disc pl-6 space-y-2">
                {listBuffer.map((item, idx) => (
                    <li key={idx}>{item.replace(/^•\s?/, '')}</li>
                ))}
            </ul>
        );
    }

    return nodes;
}

export const metadata = {
    title: 'About Us | Devroox',
    description: 'Learn about Devroox, our story, and our partnership-driven edge.',
};

export default function AboutPage() {
    const content = readAboutContent();

    return (
        <section className="py-10 md:py-16">
            <div className="mx-auto max-w-4xl px-4">
                <header className="mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">About Us</h1>
                    <p className="mt-3 text-white/70 max-w-2xl">Your vision, amplified by elite technology.</p>
                </header>

                <div className="prose prose-invert max-w-none">
                    <div className="space-y-4">
                        {renderContent(content)}
                    </div>
                </div>
            </div>
        </section>
    );
}


