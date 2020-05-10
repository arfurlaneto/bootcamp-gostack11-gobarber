import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default class FakeMailTamplateProvider implements IMailTemplateProvider {
  async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}
