import { ItemService } from "~/app/item/item.service";
import { nsTestBedBeforeEach } from "nativescript-angular/testing";
import { TestBed } from "@angular/core/testing";

describe('', () => {

    let service: ItemService;

    beforeEach(nsTestBedBeforeEach(
        [],
        [
            ItemService
        ])
    );
    
    it(' should be hello', (done) => {
        service = TestBed.get(ItemService);

        const result = service.getAsyncValue();

        result.then((res) => {
            console.log(' HELLO');
            expect(res).toEqual('hello');
            done();
        });

    });

});