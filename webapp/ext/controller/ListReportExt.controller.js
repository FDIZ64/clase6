sap.ui.define([
    "sap/ui/core/Fragment"
], (Fragment) => {
    "use strict"
    return {
        onInit () {



        },
        onOpenButton () {
            if (this._oFragment) return this._oFragment.open();
            Fragment.load({
                id: this.getView().getId(),
                name: "clase6.ext.fragments.Example",
                // name: "ext/fragments/Example",
                controller: this,
            }).then( function (oUploadFragment) { 
                this._oFragment = oUploadFragment;
                this.getView().addDependent(this._oFragment);
                this._oFragment.open();
            }.bind(this)
        );
        },
        onExit () {
            this._oFragment.close();
        }


    }
}
)