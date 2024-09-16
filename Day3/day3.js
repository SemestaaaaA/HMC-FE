const cars = [
    {
        no_plat: "DN UHUY XYZ",
        nama: "Brio",
        brand: "Honda",
        warna: ["Merah", "Kuning", "Hitam", "Silver"],
        bahan_bakar: ["Bensin"],
        maksimal_penumpang: 5
    },
    {
        no_plat: "DN 1234 XYZ",
        nama: "Avanza",
        brand: "Toyota",
        warna: ["Putih", "Hitam"],
        bahan_bakar: ["Bensin", "Solar"],
        maksimal_penumpang: 7
    },
    {
        no_plat: "DN 2345 GHI",
        nama: "Fortuner",
        brand: "Toyota",
        warna: ["Hitam"],
        bahan_bakar: ["Solar"],
        maksimal_penumpang: 7
    },
    {
        no_plat: "DN 9101 DEF",
        nama: "Xpander",
        brand: "Mitsubishi",
        warna: ["Kuning", "Hijau", "Merah"],
        bahan_bakar: ["Bensin"],
        maksimal_penumpang: 7
    },
    {
      no_plat: "B KKKK Ja",
      nama: "OTR BMW 4",
      brand: "BMW",
      warna: ["Hijau", "Silver", "Hitam"],
      bahan_bakar: ["Solar"],
      maksimal_penumpang: 4
    }
  ];
  
  function formatArray(array) {
    if (array.length === 2) {
      return array.join(" & ");
    } else {
      return array.join(", ");
    }
  }
  
  // Log each car's details to the console
  cars.forEach((car, index) => {
    console.log(`car ${index + 1}:`);
    console.log(`No. Plat: ${car.no_plat}`);
    console.log(`Name: ${car.nama}`);
    console.log(`Brand: ${car.brand}`);
    console.log(`colour: ${formatArray(car.warna)}`);
    console.log(`Fuel: ${formatArray(car.bahan_bakar)}`);
    console.log(`Max cap: ${car.maksimal_penumpang}`);
    console.log("++++++++++++++++++++++++++++++++++");
  });