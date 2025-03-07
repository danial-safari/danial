'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/_components/ui/Button';
import { IconArrowRight } from '@/app/_components/icons';
import NavLink from './navLink';
import { MobileNavigationProps } from '../header.types';

export const MobileNavigation = ({ activeSection, navLinks, showCTA }: MobileNavigationProps) => {
    return (
        <div className="md:hidden">
            {/* Floating CTA */}
            <AnimatePresence>
                {showCTA && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-20 left-4 right-4 z-40"
                    >
                        <motion.div
                            className="relative bg-background/80 backdrop-blur-lg rounded-2xl p-4 border border-border/50 shadow-lg"
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl opacity-50" />
                            <div className="relative flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-base font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                        Let's Work Together
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Have a project in mind?
                                    </p>
                                </div>
                                <Button
                                    href="#contact"
                                    variant="primary"
                                    size="sm"
                                    className="relative group overflow-hidden rounded-full"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Contact Me
                                        <motion.span
                                            className="relative z-10"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <IconArrowRight className="w-4 h-4" />
                                        </motion.span>
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 1.5, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Navigation */}
            <motion.nav
                className="fixed bottom-0 left-0 right-0 z-50"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative">
                    {/* Background blur and gradient */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-lg border-t border-border/50" />

                    {/* Navigation content */}
                    <div className="relative flex items-center justify-around h-16 px-4">
                        {navLinks.map((link) => (
                            link.showOnMobile && <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                icon={link.icon}
                                isActive={activeSection === link.href.substring(1)}
                                isMobile={true}
                            />

                        ))}
                    </div>
                </div>
            </motion.nav>
        </div>
    );
};

export default MobileNavigation; 