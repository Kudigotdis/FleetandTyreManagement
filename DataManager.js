/**
 * DataManager.js
 * Centralized data for FMIS Fleet Management App
 * Offline-first focus using localStorage
 */

const DataManager = {
  // Profiles for Gaborone Central Police Station
  USERS: [
    // 1 Admin
    { id: 'u1', first: 'Aobakwe', last: 'Karate', role: 'Admin', type: 'admin', age: 45, gender: 'Male', area: 'Block 6', phone: '+267 71234567', whatsapp: '+267 71234567', hasVehicle: true, vehicleId: 'v1' },
    // 1 Manager
    { id: 'u2', first: 'Kabelo', last: 'Mogorosi', role: 'Manager', type: 'manager', age: 52, gender: 'Male', area: 'Phase 2', phone: '+267 72345678', whatsapp: '+267 72345678', hasVehicle: true, vehicleId: 'v2' },
    // 28 Drivers (10 New, 18 Regular)
    // Regular Drivers (18)
    { id: 'u3', first: 'Tumelo', last: 'Kgari', role: 'Sergeant', type: 'driver', age: 34, gender: 'Male', area: 'Broadhurst', phone: '+267 73456789', whatsapp: '+267 73456789', hasVehicle: true, vehicleId: 'v3' },
    { id: 'u4', first: 'Segolame', last: 'Kgotleng', role: 'Officer', type: 'driver', age: 29, gender: 'Female', area: 'Gaborone West', phone: '+267 74567812', whatsapp: '+267 74567812', hasVehicle: true, vehicleId: 'v4' },
    { id: 'u5', first: 'Oarabile', last: 'Seleka', role: 'Constable', type: 'driver', age: 27, gender: 'Male', area: 'Phase 4', phone: '+267 75678923', whatsapp: '+267 75678923', hasVehicle: true, vehicleId: 'v5' },
    { id: 'u6', first: 'Mpho', last: 'Thebe', role: 'Officer', type: 'driver', age: 42, gender: 'Female', area: 'Block 8', phone: '+267 76789034', whatsapp: '+267 76789034', hasVehicle: true, vehicleId: 'v6' },
    { id: 'u7', first: 'Bogosi', last: 'Keabetswe', role: 'Sergeant', type: 'driver', age: 51, gender: 'Male', area: 'Block 9', phone: '+267 77890145', whatsapp: '+267 77890145', hasVehicle: true, vehicleId: 'v7' },
    { id: 'u8', first: 'Naledi', last: 'Pheto', role: 'Officer', type: 'driver', age: 25, gender: 'Female', area: 'Tlokweng', phone: '+267 78901256', whatsapp: '+267 78901256', hasVehicle: true, vehicleId: 'v8' },
    { id: 'u9', first: 'Kabelo', last: 'Mosweu', role: 'Constable', type: 'driver', age: 31, gender: 'Male', area: 'Kgale', phone: '+267 79012367', whatsapp: '+267 79012367', hasVehicle: true, vehicleId: 'v9' },
    { id: 'u10', first: 'Lerato', last: 'Moseki', role: 'Officer', type: 'driver', age: 36, gender: 'Female', area: 'Old Naledi', phone: '+267 70123478', whatsapp: '+267 70123478', hasVehicle: true, vehicleId: 'v10' },
    { id: 'u11', first: 'Tshepang', last: 'Mokone', role: 'Sergeant', type: 'driver', age: 39, gender: 'Male', area: 'Broadhurst', phone: '+267 71345689', whatsapp: '+267 71345689', hasVehicle: true, vehicleId: 'v11' },
    { id: 'u12', first: 'Phenyo', last: 'Molefe', role: 'Officer', type: 'driver', age: 33, gender: 'Female', area: 'Gaborone West', phone: '+267 72456790', whatsapp: '+267 72456790', hasVehicle: true, vehicleId: 'v12' },
    { id: 'u13', first: 'Resego', last: 'Nkwe', role: 'Constable', type: 'driver', age: 26, gender: 'Male', area: 'Phase 2', phone: '+267 73567801', whatsapp: '+267 73567801', hasVehicle: true, vehicleId: 'v13' },
    { id: 'u14', first: 'Thabo', last: 'Ntshabele', role: 'Officer', type: 'driver', age: 44, gender: 'Female', area: 'Phase 4', phone: '+267 74678912', whatsapp: '+267 74678912', hasVehicle: true, vehicleId: 'v14' },
    { id: 'u15', first: 'Lorato', last: 'Kgakge', role: 'Sergeant', type: 'driver', age: 48, gender: 'Female', area: 'Block 6', phone: '+267 75789023', whatsapp: '+267 75789023', hasVehicle: true, vehicleId: 'v15' },
    { id: 'u16', first: 'Pako', last: 'Mokaedi', role: 'Officer', type: 'driver', age: 37, gender: 'Male', area: 'Block 8', phone: '+267 76890134', whatsapp: '+267 76890134', hasVehicle: true, vehicleId: 'v16' },
    { id: 'u17', first: 'Onthatile', last: 'Seretse', role: 'Constable', type: 'driver', age: 32, gender: 'Female', area: 'Block 9', phone: '+267 77901245', whatsapp: '+267 77901245', hasVehicle: true, vehicleId: 'v17' },
    { id: 'u18', first: 'Kagiso', last: 'Mabote', role: 'Officer', type: 'driver', age: 47, gender: 'Male', area: 'Tlokweng', phone: '+267 78012356', whatsapp: '+267 78012356', hasVehicle: true, vehicleId: 'v18' },
    { id: 'u19', first: 'Keitumetse', last: 'Seipone', role: 'Sergeant', type: 'driver', age: 41, gender: 'Female', area: 'Kgale', phone: '+267 79123467', whatsapp: '+267 79123467', hasVehicle: true, vehicleId: 'v19' },
    { id: 'u20', first: 'Neo', last: 'Moleleki', role: 'Officer', type: 'driver', age: 35, gender: 'Female', area: 'Old Naledi', phone: '+267 70234578', whatsapp: '+267 70234578', hasVehicle: true, vehicleId: 'v20' },
    // New Drivers (10)
    { id: 'u21', first: 'Khumo', last: 'Segwai', role: 'Officer', type: 'driver', age: 24, gender: 'Male', area: 'Broadhurst', phone: '+267 71456789', whatsapp: '+267 71456789', hasVehicle: false },
    { id: 'u22', first: 'Motheo', last: 'Rampa', role: 'Constable', type: 'driver', age: 28, gender: 'Male', area: 'Gaborone West', phone: '+267 72567890', whatsapp: '+267 72567890', hasVehicle: false },
    { id: 'u23', first: 'Ipeleng', last: 'Matlhare', role: 'Officer', type: 'driver', age: 30, gender: 'Female', area: 'Phase 2', phone: '+267 73678901', whatsapp: '+267 73678901', hasVehicle: false },
    { id: 'u24', first: 'Boitumelo', last: 'Gabaitse', role: 'Constable', type: 'driver', age: 22, gender: 'Female', area: 'Phase 4', phone: '+267 74789012', whatsapp: '+267 74789012', hasVehicle: false },
    { id: 'u25', first: 'Obakeng', last: 'Sedimo', role: 'Officer', type: 'driver', age: 64, gender: 'Male', area: 'Block 6', phone: '+267 75890123', whatsapp: '+267 75890123', hasVehicle: false },
    { id: 'u26', first: 'Tsholofelo', last: 'Gabaake', role: 'Constable', type: 'driver', age: 58, gender: 'Male', area: 'Block 8', phone: '+267 76901234', whatsapp: '+267 76901234', hasVehicle: false },
    { id: 'u27', first: 'Reabetswe', last: 'Moloi', role: 'Officer', type: 'driver', age: 40, gender: 'Female', area: 'Block 9', phone: '+267 77012345', whatsapp: '+267 77012345', hasVehicle: false },
    { id: 'u28', first: 'Boitumelo', last: 'Pheto', role: 'Constable', type: 'driver', age: 21, gender: 'Female', area: 'Tlokweng', phone: '+267 78123456', whatsapp: '+267 78123456', hasVehicle: false },
    { id: 'u29', first: 'Nametso', last: 'Pilane', role: 'Officer', type: 'driver', age: 46, gender: 'Male', area: 'Kgale', phone: '+267 79234567', whatsapp: '+267 79234567', hasVehicle: false },
    { id: 'u30', first: 'Sekai', last: 'Gaontebale', role: 'Constable', type: 'driver', age: 50, gender: 'Female', area: 'Old Naledi', phone: '+267 70345678', whatsapp: '+267 70345678', hasVehicle: false },
  ],

  // Vehicles assigned to drivers
  VEHICLES: [
    { id: 'v1', reg: 'BX 2024 POL-001', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Patrol SUV', mileage: 14200, nextService: 20000 },
    { id: 'v2', reg: 'BX 2024 POL-002', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Fleet Manager Van', mileage: 9800, nextService: 15000 },
    { id: 'v3', reg: 'BX 2024 POL-007', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Criminal Investigation Sedan', mileage: 12026, nextService: 15000 },
    { id: 'v4', reg: 'BX 2024 POL-045', color: 'Blue / Gold Accent', station: 'Gaborone Central Police', type: 'Rapid Response', mileage: 22450, nextService: 25000 },
    { id: 'v5', reg: 'BX 2024 POL-178', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Traffic Patrol', mileage: 8400, nextService: 10000 },
    { id: 'v6', reg: 'BX 2024 POL-023', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Station Command Car', mileage: 11000, nextService: 15000 },
    { id: 'v7', reg: 'BX 2024 POL-089', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Prisoner Transport', mileage: 25600, nextService: 30000 },
    { id: 'v8', reg: 'BX 2024 POL-112', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Dog Unit SUV', mileage: 18300, nextService: 20000 },
    { id: 'v9', reg: 'BX 2023 POL-034', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Patrol Bakkie', mileage: 34500, nextService: 40000 },
    { id: 'v10', reg: 'BX 2024 POL-056', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Logistics Van', mileage: 15600, nextService: 20000 },
    { id: 'v11', reg: 'BX 2024 POL-067', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Patrol SUV', mileage: 12800, nextService: 15000 },
    { id: 'v12', reg: 'BX 2024 POL-078', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Traffic Patrol', mileage: 9200, nextService: 10000 },
    { id: 'v13', reg: 'BX 2023 POL-101', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'General Duty', mileage: 41000, nextService: 45000 },
    { id: 'v14', reg: 'BX 2024 POL-134', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Patrol Sedan', mileage: 13400, nextService: 15000 },
    { id: 'v15', reg: 'BX 2024 POL-145', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Special Operations Bakkie', mileage: 21000, nextService: 25000 },
    { id: 'v16', reg: 'BX 2024 POL-156', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Patrol SUV', mileage: 11500, nextService: 15000 },
    { id: 'v17', reg: 'BX 2024 POL-167', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Rapid Response', mileage: 9800, nextService: 15000 },
    { id: 'v18', reg: 'BX 2024 POL-189', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Station Support', mileage: 16700, nextService: 20000 },
    { id: 'v19', reg: 'BX 2023 POL-201', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'General Duty', mileage: 38900, nextService: 40000 },
    { id: 'v20', reg: 'BX 2024 POL-212', color: 'White / Blue Stripe', station: 'Gaborone Central Police', type: 'Patrol SUV', mileage: 14500, nextService: 20000 },
  ],

  // Tyres for vehicles
  TYRES: [
    { id: 't1', vehicleId: 'v3', pos: 'LF', brand: 'Michelin', serial: 'S1001', tread: 6.2, pressure: 32, station: 'Broadhurst Works', date: '2026-02-18', km: 12026, status: 'good' },
    { id: 't2', vehicleId: 'v3', pos: 'RF', brand: 'Bridgestone', serial: 'S1002', tread: 3.8, pressure: 30, station: 'Broadhurst Works', date: '2026-02-18', km: 22450, status: 'caution' },
    { id: 't3', vehicleId: 'v3', pos: 'RL', brand: 'Continental', serial: 'S1003', tread: 1.9, pressure: 28, station: 'Broadhurst Works', date: '2026-02-18', km: 28340, status: 'replace' },
    { id: 't4', vehicleId: 'v3', pos: 'RR', brand: 'Dunlop', serial: 'S1004', tread: 4.5, pressure: 31, station: 'Broadhurst Works', date: '2026-02-18', km: 15000, status: 'good' },
  ],

  // Initialization
  init() {
    if (!localStorage.getItem('fmis_data_initialized')) {
      localStorage.setItem('fmis_users', JSON.stringify(this.USERS));
      localStorage.setItem('fmis_vehicles', JSON.stringify(this.VEHICLES));
      localStorage.setItem('fmis_tyres', JSON.stringify(this.TYRES));
      localStorage.setItem('fmis_data_initialized', 'true');
    }
  },

  getUsers() {
    return JSON.parse(localStorage.getItem('fmis_users')) || this.USERS;
  },

  getVehicles() {
    return JSON.parse(localStorage.getItem('fmis_vehicles')) || this.VEHICLES;
  },

  getTyres(vehicleId) {
    const allTyres = JSON.parse(localStorage.getItem('fmis_tyres')) || this.TYRES;
    return allTyres.filter(t => t.vehicleId === vehicleId);
  },

  updateTyre(tyreData) {
    let allTyres = JSON.parse(localStorage.getItem('fmis_tyres')) || this.TYRES;
    const idx = allTyres.findIndex(t => t.vehicleId === tyreData.vehicleId && t.pos === tyreData.pos);
    if (idx > -1) {
      allTyres[idx] = { ...allTyres[idx], ...tyreData };
      localStorage.setItem('fmis_tyres', JSON.stringify(allTyres));
    }
  },

  getUserByLogin(first, last, pw) {
    const users = this.getUsers();
    return users.find(u => u.first.toLowerCase() === first.toLowerCase() && u.last.toLowerCase() === last.toLowerCase());
  }
};

if (typeof window !== 'undefined') {
  DataManager.init();
}
