import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Sig } from './sig.interface';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SigProvider {
    sigs: any[] = [
        {
            id: uuidv4(),
            name: "sterr",
            description: "Long description",
            range: 10,
            communicationRange: "Long Description",
            message: "I have a message for you",
            long: 48.52,
            lat: 2.19
        },
        {
            id: uuidv4(),
            name: "Macu",
            description: "Long description",
            range: 10,
            communicationRange: "Long Description",
            message: "I have a message for you",
            long: 48.52,
            lat: 3.19
        },
        {
            id: uuidv4(),
            name: "Fraxis",
            description: "Long description",
            range: 10,
            communicationRange: "Long Description",
            message: "I have a message for you",
            long: 49.52,
            lat: 2.19
        },
        {
            id: uuidv4(),
            name: "Damoe",
            description: "Long description",
            range: 10,
            communicationRange: "Long Description",
            message: "I have a message for you",
            long: 48.12,
            lat: 2.89
        },
    ];

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(){}

    getVisits(query): Sig[]{
        const sigs = !!query ? this.sigs.filter(visit => query.includes(visit.type)) : this.sigs;
        return sigs.map(visit => this.getVisit(visit.id));
    }

    getVisit(id: string): Sig {
        return {...this.sigs.find(visit => visit.id === id)};
    }

    createSig(data): Sig {
        const sig = { 
            id: uuidv4(),
            name: data.name,
            description: data.description,
            range: data.range,
            communicationRange: data.communicationRange,
            message: data.message,
            long: data.long,
            lat: data.lat,
        };
        this.sigs.push(sig);
        return sig;
    }

    delete(id: string): Sig[] {
        const index = this.sigs.findIndex(visit => visit.id === id);
        if (index === -1) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Id sig inconnu',
            }, HttpStatus.BAD_REQUEST);
        }

        this.sigs.splice(index, 1);
        return this.sigs;
    }

    updateTour(id: string, sig): Sig | boolean {
        const index = this.sigs.findIndex(sig => sig.id === id);

        const sigUpdated = { ...this.sigs[index], ...sig };
        this.sigs[index] = sigUpdated;
        return sigUpdated;
    }
}
