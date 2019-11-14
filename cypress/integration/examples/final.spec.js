/// <reference types="Cypress" />

import { timestampval } from '../../fixtures/test'

describe('DCC', () => {
    beforeEach(function () {
        // cy.fixture("DCCInputs").as("user")
        
        cy.log('Navigate to DCC Application - https://dcc-fis-msl.msit.hpcloud.hp.com/#/show')
        cy.visit('/')
        cy.server()
        cy.route({
            method: 'GET',
            url: '/ui/flag/getLoginDisabledMessage'
        }).as('waitforlogin')
        cy.wait('@waitforlogin').its('status').should('eq', 200)
        cy.log('Click on HP Employee Login')
        cy.get('.col-sm-12 > .btn').click()
        
    })
    //Click on Edit button for a device and update custom 6 to custom 10
    it('should update custome 6 to custom 10', function () {
        cy.wait(20000)
        cy.get('.device > .overview-link > a > .ng-binding').click()
        cy.get('.list-view-item-container:nth-child(3) .control:nth-child(2) > .glyphicon').click()
        // cy.wait(2000)
        cy.get('.custom6 .form-control').click({force: true}).clear().type('custom6' + timestampval.getTimestamp())
        const expcust6 = 'custom6' + timestampval.getTimestamp()
        cy.writeFile('cypress/fixtures/updatecust.json', { expcust6: 'custom6' + timestampval.getTimestamp() })//.then((cust) => {
        //     cy.log(cust.expcust6)
        // })

        cy.get('.custom7 .form-control').click({force: true}).clear().type('custom7' + timestampval.getTimestamp())
        const expcust7 = 'custom7' + timestampval.getTimestamp()
        cy.writeFile('cypress/fixtures/updatecust.json', { expcust7: 'custom7' + timestampval.getTimestamp() }, { flag: 'a+' })
        cy.get('.custom8 .form-control').click({force: true}).clear().type('custom8' + timestampval.getTimestamp())
        const expcust8 = 'custom8' + timestampval.getTimestamp()
        cy.writeFile('cypress/fixtures/updatecust.json', { expcust8: 'custom8' + timestampval.getTimestamp() }, { flag: 'a+' })
        cy.get('.custom9 .form-control').click({force: true}).clear().type('custom9' + timestampval.getTimestamp())
        const expcust9 = 'custom9' + timestampval.getTimestamp()
        cy.writeFile('cypress/fixtures/updatecust.json', { expcust9: 'custom9' + timestampval.getTimestamp() }, { flag: 'a+' })
        cy.get('.custom10 .form-control').click({force: true}).clear().type('custom10' + timestampval.getTimestamp())
        const expcust10 = 'custom10' + timestampval.getTimestamp()
        cy.writeFile('cypress/fixtures/updatecust.json', { expcust10: 'custom10' + timestampval.getTimestamp() }, { flag: 'a+' })
        cy.scrollTo('top')
        // cy.get('.custom6 .form-control').then(($actualcust6) => {
        //     cy.log($actualcust6)
        //     const actcust6 = $actualcust6.text()
        //     cy.log(actcust6)
        //     cy.writeFile('cypress/fixtures/actcust6.txt', actcust6)
        // })
        // const data = 'test' + timestampval.getTimestamp()
        cy.get('.toolbar:nth-child(7) .btn-primary').click()
        //check updated data
        cy.scrollTo('top')
        cy.reload()
        cy.wait(30000)

        

        cy.get('.list-view-item-container:nth-child(3) .control:nth-child(1) > .glyphicon').click()

        // cy.route({
        //     method: 'GET',
        //     url: '/ui/login/status'
        // }).as('fullyloaded')
        // cy.wait('@fullyloaded').its('status').should('eq', 200)

        // cy.wait(3000)
        // cy.get('.list-view-item-container:nth-child(3) .control:nth-child(1) > .glyphicon').click()
        // cy.scrollTo('top')
        // cy.wait(3000)
        cy.get('.tab-device-additional-info > .ng-binding').click({ force: true })

        // cy.server()

        
        // cy.route({
        //     method: 'GET',
        //     url: '/templates/device/contact-block'
        // }).as('waituntil')
        // cy.wait('@waituntil').its('status').should('eq', 200)

        cy.wait(3000)
        cy.scrollTo('top')
        //.as(actualcust6) //=> {
        //     cy.log(actualcust6)
        //     const actcust6 = actualcust6.text()
        // cy.log(actcust6)
        //cy.get("@actualcust6")
        cy.xpath("/html/body/div[2]/div[1]/div[2]/div/div/div[2]/div/div/div[3]/div/div/div[1]/list-view-item-detail/div/div[1]/div/scrollable-tabset/div/div[1]/div/div/div[2]/device-tab-additional-info/div/table/tbody/tr[13]/td").then((actcust6) => {
            //assert.equal(cust.expcust6, actcust6)
            expect(expcust6).to.equal(actcust6.text())
        })
        cy.xpath("/html/body/div[2]/div[1]/div[2]/div/div/div[2]/div/div/div[3]/div/div/div[1]/list-view-item-detail/div/div[1]/div/scrollable-tabset/div/div[1]/div/div/div[2]/device-tab-additional-info/div/table/tbody/tr[14]/td").then((actcust7) => {
            //assert.equal(cust.expcust6, actcust6)
            expect(expcust7).to.equal(actcust7.text())
        })
        cy.xpath("/html/body/div[2]/div[1]/div[2]/div/div/div[2]/div/div/div[3]/div/div/div[1]/list-view-item-detail/div/div[1]/div/scrollable-tabset/div/div[1]/div/div/div[2]/device-tab-additional-info/div/table/tbody/tr[15]/td").then((actcust8) => {
            //assert.equal(cust.expcust6, actcust6)
            expect(expcust8).to.equal(actcust8.text())
        })
        cy.xpath("/html/body/div[2]/div[1]/div[2]/div/div/div[2]/div/div/div[3]/div/div/div[1]/list-view-item-detail/div/div[1]/div/scrollable-tabset/div/div[1]/div/div/div[2]/device-tab-additional-info/div/table/tbody/tr[16]/td").then((actcust9) => {
            //assert.equal(cust.expcust6, actcust6)
            expect(expcust9).to.equal(actcust9.text())
        })
        cy.xpath("/html/body/div[2]/div[1]/div[2]/div/div/div[2]/div/div/div[3]/div/div/div[1]/list-view-item-detail/div/div[1]/div/scrollable-tabset/div/div[1]/div/div/div[2]/device-tab-additional-info/div/table/tbody/tr[17]/td").then((actcust10) => {
            //assert.equal(cust.expcust6, actcust6)
            expect(expcust10).to.equal(actcust10.text())
        })
        //})
        // cy.xpath("//div[@class='tab-pane ng-scope active']//tr[8]//td[1]").then(text1 => {
        //     cy.log(text1.text())
        //     cy.xpath("//div[@class='tab-pane ng-scope active']//tr[8]//td[1]").should('eq', cust6)
        // })
    })


    //Only if "This device is under review for contract change " is not there then , click on device.. then click on contract data tab , then click on request change
    it('should update contract data', function () {
        cy.wait(30000)
        cy.get('.device > .overview-link > a > .ng-binding').click()
        cy.get('body.ng-scope:nth-child(2) div.device-control-center:nth-child(2) div.main div.right-flex div.container div.ng-scope div.row.ng-scope:nth-child(2) div.col-sm-12 div.list-view div.list-view-item-container.ng-scope.allow-hover-on-list.clickable:nth-child(5) div.list-view-item.ng-isolate-scope div.list-item.ng-isolate-scope div.list-item-control-container.ng-isolate-scope span.control.do-expand.ng-scope:nth-child(1) > span.glyphicon.glyphicon-chevron-down').click()
        cy.get('.tab-device-contracts > .ng-binding').click()
        cy.wait(5000)
        cy.xpath("//button[contains(text(),'Request Change')]").click()
        cy.scrollTo('bottom')
        cy.get(':nth-child(11) > .col-sm-7 > .form-control').click().clear().type('Accessory' + timestampval.getTimestamp())
        const expAccessory = 'Accessory' + timestampval.getTimestamp()
        cy.writeFile('cypress/fixtures/updatecust.json', { expAccessory: 'Accessory' + timestampval.getTimestamp() }, { flag: 'a+' })
        cy.get(':nth-child(22) > .col-sm-7 > .form-control').click().clear().type('DocumentationLink' + timestampval.getTimestamp())
        cy.get(':nth-child(23) > .col-sm-7 > .form-control').click().clear().type('Comments' + timestampval.getTimestamp())
        cy.xpath("//div[@class='btn-group']//button[@class='btn btn-primary ng-binding'][contains(text(),'Submit')]").click()
        
        //Approval : Manage --> Contract Change request
        cy.wait(30000)
        cy.get('.hamburger').click()
        cy.wait(3000)
        cy.xpath("//a[contains(text(),'Manage')]").click()
        cy.xpath("//a[contains(text(),'Contract Change Requests')]").click()
        cy.get('.ng-scope.first > .list-view-item > .list-item > .list-item-template > :nth-child(1) > .col-sm-12 > .col-sm-4 > .normal-text > .ng-valid').click()
        cy.get('.col-sm-4 > .pull-right > .btn-primary').click()
        cy.xpath("//button[@class='btn btn-primary']").click()
        //check updated data
        cy.scrollTo('top')
        cy.reload()
        cy.wait(30000)
        cy.get('.hamburger').click()
        cy.xpath("//a[contains(text(),'View')]").click()
        cy.xpath("//a[contains(text(),'Fleet Devices')]").click()
        cy.get('body.ng-scope:nth-child(2) div.device-control-center:nth-child(2) div.main div.right-flex div.container div.ng-scope div.row.ng-scope:nth-child(2) div.col-sm-12 div.list-view div.list-view-item-container.ng-scope.allow-hover-on-list.clickable:nth-child(5) div.list-view-item.ng-isolate-scope div.list-item.ng-isolate-scope div.list-item-control-container.ng-isolate-scope span.control.do-expand.ng-scope:nth-child(1) > span.glyphicon.glyphicon-chevron-down').click()
        // cy.wait(3000)
        
        // cy.get('.list-view-item-container:nth-child(3) .control:nth-child(1) > .glyphicon').click()
        // cy.scrollTo('top')
        cy.wait(30000)
        cy.get('.tab-device-contracts > .ng-binding').click({ force: true })
        cy.wait(3000)
        cy.scrollTo('bottom')
        cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/list-view-item-detail[1]/div[1]/div[1]/div[1]/scrollable-tabset[1]/div[1]/div[1]/div[1]/div[1]/div[5]/device-tab-contracts[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[10]/td[1]").then((actAccessory) => {
            //assert.equal(cust.expcust6, actcust6)
            expect(expAccessory).to.equal(actAccessory.text())
        })

        //Reject
        //Reject : Manage --> Contract Change request
        // cy.wait(30000)
        // cy.get('.hamburger').click()
        // cy.wait(3000)
        // cy.xpath("//a[contains(text(),'Manage')]").click()
        // cy.xpath("//a[contains(text(),'Contract Change Requests')]").click()
        // cy.get('.ng-scope.first > .list-view-item > .list-item > .list-item-template > :nth-child(1) > .col-sm-12 > .col-sm-4 > .normal-text > .ng-valid').click()
        // cy.get('.col-sm-4 > .pull-right > .btn-warning').click()
        // cy.get('.form-group > .form-control').click().type('test reject' + timestampval.getTimestamp())
        // cy.get('.modal-footer > .btn-primary').click()
        // //check updated data
        // cy.scrollTo('top')
        // cy.reload()
        // cy.wait(30000)
        // cy.get('.hamburger').click()
        // cy.xpath("//a[contains(text(),'View')]").click()
        // cy.xpath("//a[contains(text(),'Fleet Devices')]").click()
        // cy.get('body.ng-scope:nth-child(2) div.device-control-center:nth-child(2) div.main div.right-flex div.container div.ng-scope div.row.ng-scope:nth-child(2) div.col-sm-12 div.list-view div.list-view-item-container.ng-scope.allow-hover-on-list.clickable:nth-child(4) div.list-view-item.ng-isolate-scope div.list-item.ng-isolate-scope div.list-item-control-container.ng-isolate-scope span.control.do-expand.ng-scope:nth-child(1) > span.glyphicon.glyphicon-chevron-down').click()
        // // cy.wait(3000)
        // // cy.get('.list-view-item-container:nth-child(3) .control:nth-child(1) > .glyphicon').click()
        // // cy.scrollTo('top')
        // cy.wait(30000)
        // cy.get('.tab-device-contracts > .ng-binding').click({ force: true })
        // cy.wait(3000)
        // cy.scrollTo('bottom')
        // cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/list-view-item-detail[1]/div[1]/div[1]/div[1]/scrollable-tabset[1]/div[1]/div[1]/div[1]/div[1]/div[5]/device-tab-contracts[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[10]/td[1]").then((actAccessory) => {
        //     //assert.equal(cust.expcust6, actcust6)
        //     expect(expAccessory).not.to.equal(actAccessory.text())
        // })


        //Cancel

        //Cancel : Manage --> Contract Change request
        // cy.wait(30000)
        // cy.get('.hamburger').click()
        // cy.wait(3000)
        // cy.xpath("//a[contains(text(),'Manage')]").click()
        // cy.xpath("//a[contains(text(),'Contract Change Requests')]").click()
        // cy.get('.ng-scope.first > .list-view-item > .list-item > .list-item-template > :nth-child(1) > .col-sm-12 > .col-sm-4 > .normal-text > .ng-valid').click()
        // cy.get('.col-sm-4 > .pull-right > .btn-danger').click()
        // cy.get('.form-group > .form-control').click().type('test cancel' + timestampval.getTimestamp())
        // cy.get('.modal-footer > .btn-primary').click()
        // //check updated data
        // cy.scrollTo('top')
        // cy.reload()
        // cy.wait(30000)
        // cy.get('.hamburger').click()
        // cy.xpath("//a[contains(text(),'View')]").click()
        // cy.xpath("//a[contains(text(),'Fleet Devices')]").click()
        // cy.get('body.ng-scope:nth-child(2) div.device-control-center:nth-child(2) div.main div.right-flex div.container div.ng-scope div.row.ng-scope:nth-child(2) div.col-sm-12 div.list-view div.list-view-item-container.ng-scope.allow-hover-on-list.clickable:nth-child(4) div.list-view-item.ng-isolate-scope div.list-item.ng-isolate-scope div.list-item-control-container.ng-isolate-scope span.control.do-expand.ng-scope:nth-child(1) > span.glyphicon.glyphicon-chevron-down').click()
        // // cy.wait(3000)
        // // cy.get('.list-view-item-container:nth-child(3) .control:nth-child(1) > .glyphicon').click()
        // // cy.scrollTo('top')
        // cy.wait(30000)
        // cy.get('.tab-device-contracts > .ng-binding').click({ force: true })
        // cy.wait(3000)
        // cy.scrollTo('bottom')
        // cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/list-view-item-detail[1]/div[1]/div[1]/div[1]/scrollable-tabset[1]/div[1]/div[1]/div[1]/div[1]/div[5]/device-tab-contracts[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[10]/td[1]").then((actAccessory) => {
        //     //assert.equal(cust.expcust6, actcust6)
        //     expect(expAccessory).not.to.equal(actAccessory.text())
        // })


    })



    it("should export non", () => {
        cy.wait(30000)
        cy.get('.hamburger').click()
        cy.xpath("//a[contains(text(),'View')]").click()
        cy.xpath("//a[contains(text(),'Fleet Devices')]").click()
        cy.get('[ng-if="listViewService.metadata.capabilities.export && listViewService.metadata.capabilities.export.length > 1"] > .dropdown-toggle > .ng-binding').click()
        cy.get('.open > .dropdown-menu > :nth-child(1) > .ng-binding').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.hamburger').click()
        cy.xpath("//a[contains(text(),'Downloads')]").click()
        cy.wait(10000)
        // cy.get('[ng-show="download.endTime && !download.error"] > .glyphicon').click({ multiple: true, force: true })
        cy.get('[ng-show="download.endTime && !download.error"] > .glyphicon').last().click({ multiple: true, force: true })
        cy.wait(30000)
        
        cy.task('updateexcel')
cy.writeFile('cypress/fixtures/updatecust.json', { expGrid: 'Grid' + timestampval.getTimestamp() }, { flag: 'a+' })
        const expGrid = 'Grid' + timestampval.getTimestamp()

        cy.wait(30000)

        cy.get('.hamburger').click()
        cy.xpath("//a[contains(text(),'View')]").click({force: true})
        cy.xpath("//a[contains(text(),'Fleet Devices')]").click({force: true})
        cy.get('[ng-if="listViewService.metadata.capabilities.bulkUpload && listViewService.metadata.capabilities.bulkUpload.length > 1"] > .dropdown-toggle > .ng-binding').click({force: true})
        cy.get('.open > .dropdown-menu > :nth-child(1) > .ng-binding').click({force: true})




        cy.fixture('Output.txt').then((updatedexcel) => {
            cy.log(updatedexcel)

            cy.readFile(updatedexcel, 'base64').then(fileContent => {

                cy.get('input[type="file"]').upload({
                    fileContent,
                    fileName: updatedexcel,
                    mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    encoding: "base64"
                },
                    {
                        uploadType: 'input'
                    }
                )
                cy.xpath("//div[@class='btn-group btn-group-sm pull-right']//button[@class='btn btn-primary ng-binding'][contains(text(),'Upload')]").click({force: true})
            })
        })
        // cy.wait(30000)
        // cy.get('h4.ng-binding > .download-container > :nth-child(1) > download-item.ng-isolate-scope > .pull-right > [ng-show="download.endTime || download.error"] > .glyphicon').click( { multiple: true }, { force: true })
        // cy.wait(1000)
        // cy.get('h4.ng-binding > .download-container > :nth-child(1) > download-item.ng-isolate-scope > .pull-right > [ng-show="download.endTime || download.error"] > .glyphicon').click( {multiple:true}, {force:true})
        cy.wait(30000)
        cy.get('.modal-footer > .btn').click()

        cy.scrollTo('top')
        cy.reload()
        cy.get('.list-view-item-container:nth-child(3) .control:nth-child(1) > .glyphicon').click()
        cy.wait(3000)
        cy.get('.tab-device-additional-info > .ng-binding').click({ force: true })
        cy.wait(3000)
        cy.scrollTo('top')
        cy.fixture('OutputGrid.txt').then((expfileGrid) => {

        cy.xpath("/html/body/div[2]/div[1]/div[2]/div/div/div[2]/div/div/div[3]/div/div/div[1]/list-view-item-detail/div/div[1]/div/scrollable-tabset/div/div[1]/div/div/div[2]/device-tab-additional-info/div/table/tbody/tr[1]/td").then((actGrid) => {
            //assert.equal(cust.expcust6, actcust6)
            expect(expfileGrid).to.equal(actGrid.text())
        })
    })

        // cy.get('[ng-if="listViewService.metadata.capabilities.export && listViewService.metadata.capabilities.export.length > 1"] > .dropdown-toggle > .ng-binding').click()
        // cy.get('.open > .dropdown-menu > :nth-child(1) > .ng-binding').click()
        // cy.get('.modal-footer > .btn').click()
        // cy.get('.hamburger').click()
        // cy.xpath("//a[contains(text(),'Downloads')]").click()
        // cy.wait(10000)
        // // cy.get('[ng-show="download.endTime && !download.error"] > .glyphicon').click({ multiple: true, force: true })
        // cy.get('[ng-show="download.endTime && !download.error"] > .glyphicon').last().click({ multiple: true, force: true })

// cy.task(checkupdatednoncont)

    })

    it("should export contractual", () => {
        cy.wait(30000)
        cy.get('.hamburger').click()
        cy.xpath("//a[contains(text(),'View')]").click( {force: true} )
        cy.xpath("//a[contains(text(),'Fleet Devices')]").click( {force: true} )
        cy.get('[ng-if="listViewService.metadata.capabilities.export && listViewService.metadata.capabilities.export.length > 1"] > .dropdown-toggle > .ng-binding').click( {force: true} )
        cy.get('.open > .dropdown-menu > :nth-child(2) > .ng-binding').click( {force: true} )
        cy.get('.modal-footer > .btn').click()
        cy.get('.hamburger').click()
        cy.xpath("//a[contains(text(),'Downloads')]").click()
        cy.wait(10000)
        // cy.get('[ng-show="download.endTime && !download.error"] > .glyphicon').click({ multiple: true, force: true })
        cy.get('[ng-show="download.endTime && !download.error"] > .glyphicon').last().click({ force: true })
        cy.wait(30000)
        cy.task('updatecontractexcel')


        cy.wait(30000)

        cy.get('.hamburger').click()
        cy.xpath("//a[contains(text(),'View')]").click({force: true})
        cy.xpath("//a[contains(text(),'Fleet Devices')]").click({force: true})
        cy.get('[ng-if="listViewService.metadata.capabilities.bulkUpload && listViewService.metadata.capabilities.bulkUpload.length > 1"] > .dropdown-toggle > .ng-binding').click({force: true})
        cy.get('.open > .dropdown-menu > :nth-child(2) > .ng-binding').click({force: true})
        // cy.get('.open > .dropdown-menu > :nth-child(1) > .ng-binding').click({force: true})



        cy.fixture('OutputContract.txt').then((updatedcontractexcel) => {
            cy.log(updatedcontractexcel)

            cy.readFile(updatedcontractexcel, 'base64').then(fileContent => {

                cy.get('input[type="file"]').upload({
                    fileContent,
                    fileName: updatedcontractexcel,
                    mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    encoding: "base64"
                },
                    {
                        uploadType: 'input'
                    }
                )
                cy.xpath("/html/body/div[4]/div/div/div[2]/div/div[1]/div[3]/div[2]/input").type('DocumentationLink' + timestampval.getTimestamp())
                cy.xpath("/html/body/div[4]/div/div/div[2]/div/div[1]/div[3]/div[4]/input").type('Comments' + timestampval.getTimestamp())
                
                cy.xpath("//div[@class='btn-group btn-group-sm pull-right']//button[@class='btn btn-primary ng-binding'][contains(text(),'Upload')]").click({force: true})
            })
        })
        cy.wait(30000)
        cy.get('.modal-footer > .btn').click()
        cy.wait(30000)
        cy.get('.hamburger').click()
        cy.wait(3000)
        cy.xpath("//a[contains(text(),'Manage')]").click()
        cy.xpath("//a[contains(text(),'Contract Change Requests')]").click()
        cy.get('.nav > :nth-child(2) > .ng-binding').click()
        cy.wait(30000)
        // cy.get('body.ng-scope:nth-child(2) div.device-control-center:nth-child(2) div.main div.right-flex div.container div.ng-scope div.list-view.ng-scope:nth-child(6) div.list-view-item-container.ng-scope.first.allow-hover-on-list.clickable:nth-child(3) div.list-view-item div.list-item div.list-item-template div.row div.col-sm-12 div.col-sm-6.ng-scope.ng-binding:nth-child(1) > input.ng-pristine.ng-valid.ng-touched').click()
        // cy.get('body.ng-scope:nth-child(2) div.device-control-center:nth-child(2) div.main div.right-flex div.container div.ng-scope div.row.ng-scope:nth-child(4) div.col-sm-4 div.pull-right > button.btn.btn-primary.ng-binding:nth-child(1)').click()
        // cy.get('body.ng-scope.modal-open:nth-child(2) div.modal.fade.ng-isolate-scope.in:nth-child(12) div.modal-dialog div.modal-content div.modal-footer.ng-scope > button.btn.btn-primary:nth-child(1)').click()
        cy.get('.ng-scope.first > .list-view-item > .list-item > .list-item-template > :nth-child(1) > .col-sm-12 > .col-sm-6 > .ng-valid').click()
        cy.get('.col-sm-4 > .pull-right > .btn-primary').click()
        cy.xpath("//button[@class='btn btn-primary']").click()

//check updated data
cy.scrollTo('top')
cy.reload()
cy.wait(30000)
cy.get('.hamburger').click()
cy.xpath("//a[contains(text(),'View')]").click()
cy.xpath("//a[contains(text(),'Fleet Devices')]").click()
cy.get('body.ng-scope:nth-child(2) div.device-control-center:nth-child(2) div.main div.right-flex div.container div.ng-scope div.row.ng-scope:nth-child(2) div.col-sm-12 div.list-view div.list-view-item-container.ng-scope.allow-hover-on-list.clickable:nth-child(5) div.list-view-item.ng-isolate-scope div.list-item.ng-isolate-scope div.list-item-control-container.ng-isolate-scope span.control.do-expand.ng-scope:nth-child(1) > span.glyphicon.glyphicon-chevron-down').click()
// cy.wait(3000)

// cy.get('.list-view-item-container:nth-child(3) .control:nth-child(1) > .glyphicon').click()
// cy.scrollTo('top')
cy.wait(30000)
cy.get('.tab-device-contracts > .ng-binding').click({ force: true })
cy.wait(3000)
cy.scrollTo('bottom')
cy.fixture('OutputAcc.txt').then((expfileAcc) => {
cy.xpath("/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/list-view-item-detail[1]/div[1]/div[1]/div[1]/scrollable-tabset[1]/div[1]/div[1]/div[1]/div[1]/div[5]/device-tab-contracts[1]/div[1]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[10]/td[1]").then((actAccessory) => {
    //assert.equal(cust.expcust6, actcust6)
    expect(expfileAcc).to.equal(actAccessory.text())
})
})


        

    })

})
