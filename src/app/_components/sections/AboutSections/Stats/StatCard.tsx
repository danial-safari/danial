interface StatCardProps {
    value: string;
    label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => {
    return (
        <div className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-bold text-gradient mb-2">{value}</span>
            <span className="text-muted-foreground">{label}</span>
        </div>
    );
}; 