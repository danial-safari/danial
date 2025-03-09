'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

interface Feature {
    id: 'users' | 'storage' | 'support' | 'api';
    name: string;
    basePrice: number;
    pricePerUnit?: number;
    isToggle?: boolean;
}

interface Values {
    users: number;
    storage: number;
    support: boolean;
    api: boolean;
}

const features: Feature[] = [
    { id: 'users', name: 'Team Members', basePrice: 10, pricePerUnit: 5 },
    { id: 'storage', name: 'Storage (GB)', basePrice: 20, pricePerUnit: 2 },
    { id: 'support', name: '24/7 Support', basePrice: 50, isToggle: true },
    { id: 'api', name: 'API Access', basePrice: 100, isToggle: true },
];

export function PricingCalculator() {
    const [values, setValues] = useState({
        users: 5,
        storage: 10,
        support: false,
        api: false,
    });

    const calculateTotal = () => {
        let total = 0;
        features.forEach((feature) => {
            if (feature.isToggle) {
                if (values[feature.id as keyof Values]) {
                    total += feature.basePrice;
                }
            } else {
                total += feature.basePrice + (values[feature.id as keyof Values] * feature.pricePerUnit!);
            }
        });
        return total;
    };

    const handleInputChange = (id: string, value: number | boolean) => {
        setValues((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <div className="max-w-2xl mx-auto">
            <Card className="p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            className="flex items-center justify-between"
                        >
                            <div>
                                <Label htmlFor={feature.id}>{feature.name}</Label>
                                <p className="text-sm text-muted-foreground">
                                    {feature.isToggle
                                        ? `$${feature.basePrice}/month`
                                        : `$${feature.pricePerUnit}/unit + $${feature.basePrice} base`}
                                </p>
                            </div>

                            {feature.isToggle ? (
                                <Switch
                                    id={feature.id}
                                    checked={values[feature.id as keyof Values] as boolean}
                                    onCheckedChange={(checked) =>
                                        handleInputChange(feature.id, checked)
                                    }
                                />
                            ) : (
                                <Input
                                    id={feature.id}
                                    type="number"
                                    min="0"
                                    value={values[feature.id as keyof Values]}
                                    onChange={(e) =>
                                        handleInputChange(feature.id, parseInt(e.target.value) || 0)
                                    }
                                    className="w-24"
                                />
                            )}
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pt-6 border-t"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-semibold">Total Monthly Cost</span>
                            <span className="text-2xl font-bold">${calculateTotal()}</span>
                        </div>
                        <Button className="w-full">Get Started</Button>
                    </motion.div>
                </motion.div>
            </Card>
        </div>
    );