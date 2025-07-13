import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Select,
  VStack,
  Text,
  Heading,
  SimpleGrid, Checkbox,CheckboxGroup, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex
} from "@chakra-ui/react";
import flightsData from "../data/flights.js";


const SearchFlights = () => {
  const [from, setFrom] = useState("Pune");
  const [to, setTo] = useState("Mumbai");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [priceRange, setPriceRange] = useState(10000);
  
  const navigate = useNavigate();

  const handleSearch = () => {
    const filtered = flightsData.filter(
      (f) => f.from === from && f.to === to
    );
    setResults(filtered);
    setFilteredResults(filtered);
  };

    const handleFilter = () => {
    const filtered = results.filter(
      (f) =>
        (selectedAirlines.length === 0 || selectedAirlines.includes(f.airline)) &&
        f.price <= priceRange
    );
    setFilteredResults(filtered);;
  };

  return (
    <Box p={6}>
      <Heading mb={4}>Search Flights</Heading>
      <VStack spacing={4} align="stretch" maxW="400px">
        <Select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Sri Lanka">Sri Lanka</option>
        </Select>

        <Select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Delhi">Delhi</option>
          <option value="Sri Lanka">Sri Lanka</option>
        </Select>

        <Button colorScheme="blue" onClick={handleSearch}>Search</Button>
      </VStack>

      {results.length > 0 && (
        <Box mt={8}>
          <Heading size="md" mb={2}>
            Filters:
          </Heading>

          {/* Airlines Filter */}
          <CheckboxGroup onChange={setSelectedAirlines}>
            <Text fontWeight="bold" mb={1}>Airlines</Text>
            <Flex gap={2} wrap="wrap">
              {[...new Set(results.map((f) => f.airline))].map((airline) => (
                <Checkbox key={airline} value={airline}>
                  {airline}
                </Checkbox>
              ))}
            </Flex>
          </CheckboxGroup>

          {/* Price Filter */}
          <Box mt={4}>
            <Text fontWeight="bold" mb={1}>Max Price: ₹{priceRange}</Text>
            <Slider
              aria-label="price-slider"
              defaultValue={10000}
              max={10000}
              min={1000}
              step={500}
              value={priceRange}
              onChange={(val) => setPriceRange(val)}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>

          <Button colorScheme="teal" mt={3} onClick={handleFilter}>
            Apply Filters
          </Button>
        </Box>
      )}

      {/* Results */}
      <Box mt={8}>
        <Heading size="md" mb={2}>
          Results:
        </Heading>
        <SimpleGrid spacing={4}>
          {filteredResults.length > 0 ? (
            filteredResults.map((flight) => (
              <Box
                key={flight.id}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                bg="gray.50"
              >
                <Text>
                  <b>{flight.airline}</b>: {flight.from} → {flight.to}
                </Text>
                <Text>
                  Departure:{" "}
                  {new Date(flight.departure).toLocaleString()}
                </Text>
                <Text>Price: ₹{flight.price}</Text>
                <Button
                  mt={2}
                  size="sm"
                  colorScheme="blue"
                  // onClick={() => alert(`Proceed to book ${flight.id}`)}
                  onClick={() => navigate(`/booking/${flight.id}`)}

                >
                  Book Now
                </Button>
              </Box>
            ))
          ) : (
            <Text>No flights match your filters.</Text>
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SearchFlights;
