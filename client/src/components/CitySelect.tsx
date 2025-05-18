import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import { Input } from './ui/input';

interface CitySearchProps {
    value?: string;
    onSelectCity: (city: string) => void;   
    className?: string;
}

interface City {
    id: number;
    name: string;
}

export const CitySelect = ({value= "", onSelectCity, className}: CitySearchProps) => {

    const [searchTerm, setSearchTerm] = React.useState<string>(value);
    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const fetchCities = async (query: string) => {
        setLoading(true);
        try {
            const response = await fetch(
                 `https://nominatim.openstreetmap.org/search?country=Serbia&city=${query}&format=json&limit=10`
            )
            const data = await response.json();
            const cityResults: City[] = data.map((item: any) => ({
                id: item.place_id,
                name: item.name || item.display_name,
            }))
            setCities(cityResults);
            setOpen(true);
        } catch (error) {
            console.error("Greska pri preuzimanju", error);
        } finally {
            setLoading(false)
        }
    }

    const handleCitySelect = (cityName: string) => {
        setSearchTerm(cityName);
        setCities([]);
        onSelectCity(cityName);
        setOpen(false);
      };
    
      useEffect(() => {
        if (open && inputRef.current) {
          inputRef.current.focus();
        }
      }, [open]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchTerm(query)
        if (query.length > 2) {
            fetchCities(query);
        } else {
            setCities([]);
            setOpen(false);
        }
    }




  return (
    <div className="relative">
      <Input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Upiši mesto dešavanja"
        className={className}
        onFocus={() => {
          if (searchTerm.length > 1) {
            setOpen(true);
          }
        }}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
      />
      {open && (
        <div className="absolute overflow-scroll top-full left-0 w-full h-auto bg-white border border-gray-300 mt-1 z-10">
          {loading ? (
            <div className="p-2">Učitavanje...</div>
          ) : cities.length === 0 ? (
            <div className="p-2">Nema pronađenih gradova.</div>
          ) : (
            <ul>
              {cities.map((city) => (
                <li
                  key={city.id}
                  onClick={() => handleCitySelect(city.name)}
                  className="cursor-pointer hover:bg-gray-200 p-2"
                >
                  {city.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
