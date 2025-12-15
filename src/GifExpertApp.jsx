import { useState, useEffect } from 'react';
import { Header, SearchHero, CategorySelector, GifGrid, BackgroundGifs } from './components';
import { useTheme } from './hooks/useTheme';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    
    const onToggleCategory = (category) => {
        if (categories.includes(category)) {
            setCategories(categories.filter(cat => cat !== category));
        } else {
            setCategories([category, ...categories]);
        }
    };
    
    const onClearCategories = () => {
        setCategories([]);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app">
            <BackgroundGifs />
            
            <Header 
                onClearCategories={onClearCategories}
                isScrolled={isScrolled}
                isDark={isDark}
                toggleTheme={toggleTheme}
            />
            
            <SearchHero 
                onNewCategory={onToggleCategory}
                categorySelector={
                    <CategorySelector 
                        onSelectCategory={onToggleCategory}
                        selectedCategories={categories}
                    />
                }
            />
            
            <main className="main-content">
                <div className="results-section">
                    {categories.map((category) => (
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}