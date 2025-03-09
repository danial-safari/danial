'use client';

import { motion } from 'framer-motion';
import { PricingPlans } from '@/app/_components/Pricing/PricingPlans';
import { PricingCalculator } from '@/app/_components/Pricing/PricingCalculator';
import { PricingSlider } from '@/app/_components/Pricing/PricingSlider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PricingPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Select from our flexible pricing options designed to match your needs
                </p>
            </motion.div>

            <Tabs defaultValue="plans" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
                    <TabsTrigger value="plans">Plans</TabsTrigger>
                    <TabsTrigger value="calculator">Calculator</TabsTrigger>
                    <TabsTrigger value="slider">Slider</TabsTrigger>
                </TabsList>

                <TabsContent value="plans">
                    <PricingPlans />
                </TabsContent>

                <TabsContent value="calculator">
                    <PricingCalculator />
                </TabsContent>

                <TabsContent value="slider">
                    <PricingSlider />
                </TabsContent>
            </Tabs>
        </div>
    );
} 