/**
 * FMIS DataManager - Centralized Data Logic
 * Handles Users, Vehicles, Tyres, Fuel Logs, and Reports.
 * Persistent via localStorage.
 */
const DataManager = {
  USERS: [
    // 1 Admin
    { id: 'u1', first: 'Aobakwe', last: 'Karate', role: 'Admin', type: 'admin', age: 45, gender: 'Male', area: 'Block 6', phone: '+267 71234567', whatsapp: '+267 71234567', hasVehicle: true, vehicleId: 'v1' },
    // 1 Manager
    { id: 'u2', first: 'Kabelo', last: 'Mogorosi', role: 'Manager', type: 'manager', age: 52, gender: 'Male', area: 'Phase 2', phone: '+267 72345678', whatsapp: '+267 72345678', hasVehicle: true, vehicleId: 'v2' },
    // 28 Drivers (10 new/unassigned, 18 with vehicles)
    { id: 'u3', first: 'Thabo', last: 'Molefe', role: 'Senior Driver', type: 'driver', age: 38, gender: 'Male', area: 'Broadhurst', hasVehicle: true, vehicleId: 'v3' },
    { id: 'u4', first: 'Lesedi', last: 'Tshipa', role: 'Driver', type: 'driver', age: 29, gender: 'Female', area: 'Tlokweng', hasVehicle: true, vehicleId: 'v4' },
    { id: 'u5', first: 'Mpho', last: 'Kebotseng', role: 'Driver', type: 'driver', age: 34, gender: 'Male', area: 'G-West', hasVehicle: true, vehicleId: 'v5' },
    { id: 'u6', first: 'Onneile', last: 'Modise', role: 'Driver', type: 'driver', age: 41, gender: 'Female', area: 'Bontleng', hasVehicle: true, vehicleId: 'v6' },
    { id: 'u7', first: 'Khumo', last: 'Lekau', role: 'Trainee', type: 'driver', age: 24, gender: 'Male', area: 'Mmopane', hasVehicle: false },
    { id: 'u8', first: 'Motheo', last: 'Sentsho', role: 'Trainee', type: 'driver', age: 22, gender: 'Female', area: 'Mogoditshane', hasVehicle: false },
    // ... adding more to reach 30
    { id: 'u9', first: 'Ipeleng', last: 'Segokgo', role: 'Driver', type: 'driver', age: 31, gender: 'Male', area: 'Block 8', hasVehicle: false },
    { id: 'u10', first: 'Boitumelo', last: 'Ramasilo', role: 'Driver', type: 'driver', age: 27, gender: 'Female', area: 'Phakalane', hasVehicle: false },
    { id: 'u11', first: 'Obakeng', last: 'Setshwane', role: 'Driver', type: 'driver', age: 35, gender: 'Male', area: 'Old Naledi', hasVehicle: false },
    { id: 'u12', first: 'Tsholofelo', last: 'Gaolathe', role: 'Driver', type: 'driver', age: 30, gender: 'Female', area: 'Tlokweng', hasVehicle: false },
    { id: 'u13', first: 'Reabetswe', last: 'Motsu', role: 'Driver', type: 'driver', age: 33, gender: 'Male', area: 'Gabane', hasVehicle: false },
    { id: 'u14', first: 'Neo', last: 'Phuti', role: 'Driver', type: 'driver', age: 40, gender: 'Male', area: 'Block 6', hasVehicle: true, vehicleId: 'v7' },
    { id: 'u15', first: 'Nametso', last: 'Kgang', role: 'Driver', type: 'driver', age: 28, gender: 'Female', area: 'Phase 4', hasVehicle: false },
    { id: 'u16', first: 'Sekai', last: 'Tlou', role: 'Driver', type: 'driver', age: 45, gender: 'Male', area: 'Bontleng', hasVehicle: false },
    { id: 'u17', first: 'Kabo', last: 'Letshabo', role: 'Driver', type: 'driver', age: 37, gender: 'Male', area: 'G-West', hasVehicle: true, vehicleId: 'v8' },
    { id: 'u18', first: 'Palesa', last: 'Mooketsi', role: 'Driver', type: 'driver', age: 26, gender: 'Female', area: 'Broadhurst', hasVehicle: true, vehicleId: 'v9' }
  ],

  VEHICLES: [
    { id: 'v1', reg: 'BX 2024 GA', type: 'SUV (Prado)', color: 'White', station: 'Central Depot', mileage: 45200 },
    { id: 'v2', reg: 'BX 2024 FR', type: 'Bakkie (Hilux)', color: 'White', station: 'Francistown Yard', mileage: 38000 },
    { id: 'v3', reg: 'BX 2024 SE', type: 'Ambulance', color: 'White', station: 'Tlokweng Clinic', mileage: 12500 },
    { id: 'v4', reg: 'BX 2024 KW', type: 'Bakkie (Ford)', color: 'Silver', station: 'Molepolole Works', mileage: 56000 },
    { id: 'v5', reg: 'BX 2024 CE', type: '7Ton Truck', color: 'White', station: 'Serowe Depot', mileage: 89000 },
    { id: 'v6', reg: 'BX 2024 ST', type: 'Minibus', color: 'White', station: 'Sowa Town Office', mileage: 22000 },
    { id: 'v7', reg: 'BX 2024 LO', type: 'Sedan (Corolla)', color: 'Silver', station: 'Lobatse Town', mileage: 15400 },
    { id: 'v8', reg: 'BX 2024 SP', type: 'Bakkie (Hilux)', color: 'White', station: 'Selibe Phikwe', mileage: 41200 }
  ],

  TYRES: [
    { id: 't1', vehicleId: 'v1', pos: 'LF', brand: 'Michelin', serial: 'MICH-001', tread: 7.2, pressure: 32, km: 5400 },
    { id: 't2', vehicleId: 'v1', pos: 'RF', brand: 'Michelin', serial: 'MICH-002', tread: 7.0, pressure: 31, km: 5400 },
    { id: 't3', vehicleId: 'v1', pos: 'RL', brand: 'Continental', serial: 'CONT-001', tread: 5.4, pressure: 33, km: 12000 },
    { id: 't4', vehicleId: 'v1', pos: 'RR', brand: 'Continental', serial: 'CONT-002', tread: 5.5, pressure: 32, km: 12000 }
  ],

  // NEW: FUEL LOGS
  FUEL_LOGS: [
    { id: 'f1', vehicleId: 'v1', date: '2026-02-18', time: '08:45', litres: 45.5, price: 15.80, station: 'Puma Central' },
    { id: 'f2', vehicleId: 'v2', date: '2026-02-18', time: '10:15', litres: 60.0, price: 16.20, station: 'Shell Broadhurst' },
    { id: 'f3', vehicleId: 'v3', date: '2026-02-19', time: '14:20', litres: 38.2, price: 15.80, station: 'Engen Tlokweng' },
    { id: 'f4', vehicleId: 'v4', date: '2026-02-20', time: '07:30', litres: 52.0, price: 16.20, station: 'Vivo G-West' },
    { id: 'f5', vehicleId: 'v5', date: '2026-02-20', time: '09:00', litres: 120.5, price: 16.20, station: 'Puma Central' }
  ],

  // NEW: ATTENTIONS (Issues/Alerts)
  ATTENTIONS: [
    { id: 'a1', vehicleId: 'v1', userId: 'u1', type: 'Inspection', status: 'Urgent', date: '2026-02-20', details: 'Annual regulatory inspection due.' },
    { id: 'a2', vehicleId: 'v3', userId: 'u3', type: 'Service', status: 'Pending', date: '2026-02-21', details: '15,000km service scheduled.' },
    { id: 'a3', vehicleId: 'v5', userId: 'u5', type: 'Burst Tyre', status: 'Critical', date: '2026-02-19', details: 'RL Tyre burst on A1 highway.' },
    { id: 'a4', vehicleId: 'v4', userId: 'u4', type: 'Car Accident', status: 'Critical', date: '2026-02-18', details: 'Minor collision at Mogoditshane junction.' }
  ],

  init() {
    if (!localStorage.getItem('fmis_data_initialized_v2')) {
      localStorage.setItem('fmis_users', JSON.stringify(this.USERS));
      localStorage.setItem('fmis_vehicles', JSON.stringify(this.VEHICLES));
      localStorage.setItem('fmis_tyres', JSON.stringify(this.TYRES));
      localStorage.setItem('fmis_fuel', JSON.stringify(this.FUEL_LOGS));
      localStorage.setItem('fmis_attentions', JSON.stringify(this.ATTENTIONS));
      localStorage.setItem('fmis_reports', JSON.stringify([]));
      localStorage.setItem('fmis_data_initialized_v2', 'true');
    }
  },

  getUsers() { return JSON.parse(localStorage.getItem('fmis_users')); },
  getVehicles() { return JSON.parse(localStorage.getItem('fmis_vehicles')); },
  getTyres(vId) {
    const all = JSON.parse(localStorage.getItem('fmis_tyres'));
    return vId ? all.filter(t => t.vehicleId === vId) : all;
  },
  getFuel(vId) {
    const all = JSON.parse(localStorage.getItem('fmis_fuel'));
    return vId ? all.filter(f => f.vehicleId === vId) : all;
  },
  getAttentions() { return JSON.parse(localStorage.getItem('fmis_attentions')); },

  // Method to update tyres
  updateTyre(data) {
    let all = JSON.parse(localStorage.getItem('fmis_tyres'));
    const idx = all.findIndex(t => t.vehicleId === data.vehicleId && t.pos === data.pos);
    if (idx !== -1) {
      all[idx] = { ...all[idx], ...data };
    } else {
      all.push({ id: 't' + Date.now(), ...data });
    }
    localStorage.setItem('fmis_tyres', JSON.stringify(all));
  },

  // REPORT METHODS
  saveReport(report) {
    let all = JSON.parse(localStorage.getItem('fmis_reports'));
    report.id = 'REP-' + Date.now();
    all.push(report);
    localStorage.setItem('fmis_reports', JSON.stringify(all));
  },
  getReports() { return JSON.parse(localStorage.getItem('fmis_reports')); },
  deleteReport(id) {
    let all = JSON.parse(localStorage.getItem('fmis_reports'));
    all = all.filter(r => r.id !== id);
    localStorage.setItem('fmis_reports', JSON.stringify(all));
  }
};

DataManager.init();
