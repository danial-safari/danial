'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const tiers = [
    {
        name: 'Basic',
        maxUsers: 10,
        features: ['Basic features', 'Email support', '5GB storage'],
        basePrice: 29,
    },
    {
        name: 'Professional',
        maxUsers: 50,
        features: [
            'Advanced features',
            'Priority support',
            '50GB storage',
            'API access',
        ],
        basePrice: 99,
    },
    {
        name: 'Enterprise',
        maxUsers: 100,
        features: [
            'All features',
            '24/7 support',
            'Unlimited storage',
            'API access',
            'Custom integrations',
        ],
        basePrice: 299,
    },
];

export function PricingSlider() {
    const [users, setUsers] = useState(10);

    const getCurrentTier = () => {
        return tiers.find((tier, index) => {
            const nextTier = tiers[index + 1];
            return users <= tier.maxUsers && (!nextTier || users < nextTier.maxUsers);
        }) || tiers[tiers.length - 1];
    };

    const calculatePrice = () => {
        const tier = getCurrentTier();
        const basePrice = tier.basePrice;
        const extraUsers = Math.max(0, users - tier.maxUsers);
        const pricePerExtraUser = tier.name === 'Enterprise' ? 3 : 5;
        const extraUsersCost = tier.name === 'Enterprise' ? 0 : extraUsers * pricePerExtraUser;
        return basePrice + extraUsersCost;
    };

    const handleSliderChange = ([value]: number[]) => {
        const boundedValue = Math.max(1, Math.min(value, 100));
        setUsers(boundedValue);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <Card className="p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">{getCurrentTier().name}</h3>
                        <div className="flex items-baseline justify-center gap-1 mb-4">
                            <span className="text-4xl font-bold">${calculatePrice()}</span>
                            <span className="text-muted-foreground">/month</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="text-center">
                            <span className="text-sm text-muted-foreground">Team Size</span>
                            <div className="text-2xl font-semibold">{users} users</div>
                        </div>

                        <Slider
                            value={[users]}
                            onValueChange={handleSliderChange}
                            min={1}
                            max={100}
                            step={1}
                            className="w-full"
                        />

                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>1 user</span>
                            <span>100 users</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Included in {getCurrentTier().name}:</h4>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="grid gap-3"
                        >
                            {getCurrentTier().features.map((feature) => (
                                <motion.div
                                    key={feature}
                                    initial={{ x: -20 }}
                                    animate={{ x: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Check className="h-5 w-5 text-primary" />
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <Button className="w-full">Get Started</Button>
                </motion.div>
            </Card>
        </div>
    );
} 