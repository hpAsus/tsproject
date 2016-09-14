import {Injectable} from 'wk-ng/decorators/injectable';

@Injectable()
export class QService {
    get field(): string {
        return 'field from service';
    }
}
