type JourneyTextProps = {
    paragraphs: string[];
}

export const JourneyText = ({ paragraphs }: JourneyTextProps) => {
    return (
        <div className="space-y-4 text-muted-foreground">
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}; 