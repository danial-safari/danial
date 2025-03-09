'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const plans = [
    {
        name: 'Starter',
        price: 29,
        description: 'Perfect for small businesses and startups',
        features: [
            'Up to 5 team members',
            '5GB storage',
            'Basic analytics',
            'Email support',
            'API access',
        ],
        highlighted: false,
    },
    {
        name: 'Professional',
        price: 99,
        description: 'Ideal for growing businesses',
        features: [
            'Up to 20 team members',
            '50GB storage',
            'Advanced analytics',
            'Priority support',
            'API access',
            'Custom integrations',
            'Team collaboration tools',
        ],
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: 299,
        description: 'For large organizations',
        features: [
            'Unlimited team members',
            'Unlimited storage',
            'Custom analytics',
            '24/7 dedicated support',
            'API access',
            'Custom integrations',
            'Advanced security',
            'SLA guarantee',
        ],
        highlighted: false,
    },
];

export function PricingPlans() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
                <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card className={`relative p-6 ${plan.highlighted
                        ? 'border-primary shadow-lg scale-105'
                        : 'border-border'
                        }`}>
                        {plan.highlighted && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-muted-foreground mb-4">{plan.description}</p>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-4xl font-bold">${plan.price}</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                            >
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-primary" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <Button
                            className={`w-full ${plan.highlighted ? 'bg-primary' : 'bg-secondary'
                                }`}
                        >
                            Get Started
                        </Button>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}