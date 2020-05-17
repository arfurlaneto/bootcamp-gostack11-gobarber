import FakeAppointmentRepository from '../repositories/FakeAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppointmentRepository: FakeAppointmentRepository;
let listProviderAppointments: ListProviderAppointmentsService;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentRepository,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentRepository.create({
      provider_id: 'provider-id',
      date: new Date(2020, 4, 20, 14, 0, 0),
      user_id: 'user-id',
    });

    const appointment2 = await fakeAppointmentRepository.create({
      provider_id: 'provider-id',
      date: new Date(2020, 4, 20, 15, 0, 0),
      user_id: 'user-id',
    });

    const availability = await listProviderAppointments.execute({
      provider_id: 'provider-id',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(availability).toEqual([appointment1, appointment2]);
  });
});
